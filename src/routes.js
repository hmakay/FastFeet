import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ReceiverController from './app/controllers/ReceiverController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/receivers', ReceiverController.store);

routes.post('/users', UserController.store);

routes.put('/users', UserController.update);

export default routes;
