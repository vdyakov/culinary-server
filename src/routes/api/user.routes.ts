import { Router } from 'express';
import IJwtRequest from '../../intefaces/routes/IJwtRequest';

const router: Router = Router();

router.get('/info', (req: IJwtRequest, res) => { res.status(200).json({ userId: req.user._id }) });

export default router;