import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import routerErrorHandler from './helpers/routerErrorHandler';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routerErrorHandler);
app.use(routes);

export default app;
