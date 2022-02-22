import { ErrorRequestHandler } from 'express';
import responseMessages from '../constants/responseMessages';

const routerErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof SyntaxError) {
    res.status(415).json(responseMessages.INVALID_CONTENT_TYPE);
  } else if (err) {
    res.status(500).json(responseMessages.UNEXPECTED_ERROR);
  } else {
    next();
  }
};

export default routerErrorHandler;
