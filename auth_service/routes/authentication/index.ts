import jwt from 'jsonwebtoken';
import { RequestHandler } from 'express';
import Connection from '../../database/Connection';
import User from '../../database/models/User';
import Token from '../../database/models/Token';
import { Credentials, Tokens } from '../types';
import responseMessages from '../../constants/responseMessages';

const authentication: RequestHandler<
  null,
  Tokens | string,
  Credentials
> = async (req, res) => {
  if (!req.body?.username || !req.body?.password) {
    res.status(401).json(responseMessages.INCORRECT_REQUEST_BODY);
    return;
  }

  const { username, password } = req.body;

  const connection = await Connection.getInstance();

  const userModel = new User(connection);
  const tokenModel = new Token(connection);
  const user = await userModel.getUser(username);

  if (user && password === user.password) {
    const { _id: id } = user;

    const access = jwt.sign({ username }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60,
    });
    const refresh = jwt.sign({ username }, process.env.SECRET_REFRESH_KEY, {
      expiresIn: 60 * 60 * 48,
    });

    await tokenModel.setNewToken(id, refresh);

    res.status(201).json({ access: `Bearer ${access}`, refresh });
  } else {
    res.status(401).json(responseMessages.INCORRECT_CREDENTIALS);
  }
};

export default authentication;
