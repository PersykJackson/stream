import jwt from 'jsonwebtoken';
import { RequestHandler } from 'express';
import Connection from '../../database/Connection';
import User from '../../database/models/User';
import Token from '../../database/models/Token';
import { Tokens } from '../types';
import responseMessages from '../../constants/responseMessages';

const refresh: RequestHandler<
  null,
  Tokens | string,
  { token: string }
> = async (req, res) => {
  try {
    const { token } = req.body;

    const { username } = jwt.verify(
      token,
      process.env.SECRET_REFRESH_KEY
    ) as jwt.JwtPayload;

    const connection = await Connection.getInstance();

    const userModel = new User(connection);
    const tokenModel = new Token(connection);
    const { _id: id } = await userModel.getUser(username);

    if (!(await tokenModel.checkIsTokenExists(token))) {
      throw new Error('Unknown token!');
    }

    const accessToken = jwt.sign({ username }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60,
    });
    const refreshToken = jwt.sign(
      { username },
      process.env.SECRET_REFRESH_KEY,
      {
        expiresIn: 60 * 60 * 48,
      }
    );

    await tokenModel.setNewToken(id, refreshToken);

    res.status(200).json({ access: accessToken, refresh: refreshToken });
  } catch (e) {
    res.status(401).json(responseMessages.UNAUTHORIZED);
  }
};

export default refresh;
