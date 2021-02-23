import { Router } from 'express';
import { registerHandler } from '../../handlers/routes/auth/RegisterHandler';
import { loginHandler } from '../../handlers/routes/auth/LoginHandler';

const router: Router = Router();

router.post('/register', registerHandler);

router.post('/login', loginHandler);

export default router;