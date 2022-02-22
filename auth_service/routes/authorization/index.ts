import jwt from 'jsonwebtoken';
import { RequestHandler } from 'express';
import responseMessages from '../../constants/responseMessages';

const authorization: RequestHandler<null, string, null> = async (req, res) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');

    jwt.verify(token, process.env.SECRET_KEY);

    res.status(200).json(responseMessages.SUCCESS);
  } catch (e) {
    if (e.name === jwt.TokenExpiredError.name) {
      res.status(401).json(responseMessages.TOKEN_EXPIRED);
    } else {
      res.status(401).json(responseMessages.UNAUTHORIZED);
    }
  }
};

export default authorization;
