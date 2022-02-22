import express from 'express';
import swagger from 'swagger-ui-express';
import registration from './registration';
import authentication from './authentication';
import authorization from './authorization';
import refresh from './refresh';
import endpoints from '../constants/endpoints';
import specification from '../swagger.json';

const router = express.Router();

router.post(endpoints.REGISTRATION, registration);
router.post(endpoints.AUTHENTICATION, authentication);
router.post(endpoints.AUTHORIZATION, authorization);
router.post(endpoints.REFRESH, refresh);
router.use('/', swagger.serve);
router.get('/', swagger.setup(specification));

export default router;
