import { Router } from 'express';
import { verifyToken } from '../helpers/middlewares/jwt';
import AuthRouter from './api/auth.routes';
import UserRouter from './api/user.routes';
import PreferenceTypeRouter from './api/preferenceType.routes';
import RecipeRouter from './api/recipe.routes';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.use('/user', verifyToken, UserRouter);

router.use('/preference-type', verifyToken, PreferenceTypeRouter);

router.use('/recipe', verifyToken, RecipeRouter);

export default router;