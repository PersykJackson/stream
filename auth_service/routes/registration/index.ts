import { RequestHandler } from 'express';
import Connection from '../../database/Connection';
import UserValidator from '../../helpers/UserValidator';
import userValidationConfig from '../../configs/userValidationConfig';
import User from '../../database/models/User';
import { Credentials } from '../types';
import responseMessages from '../../constants/responseMessages';

const registration: RequestHandler<null, string, Credentials> = async (
  req,
  res
) => {
  const { username, password } = req.body;
  const connection = await Connection.getInstance();

  const validator = new UserValidator(userValidationConfig);
  const userModel = new User(connection);

  if (!validator.isValid({ username, password })) {
    res.status(400).json(responseMessages.INVALID_USER);
    return;
  }

  if (await userModel.checkUserExistence(username)) {
    res.status(400).json(responseMessages.USER_ALREADY_EXISTS);
    return;
  }

  const result = await userModel.createUser({ username, password });

  if (result) {
    res.status(201).json(responseMessages.CREATED);
  } else {
    res.status(500).json(responseMessages.UNEXPECTED_ERROR);
  }
};

export default registration;
