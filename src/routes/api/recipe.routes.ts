import { Router } from 'express';
import { getListHandler } from '../../handlers/routes/recipe/GetListHandler';
import { createHandler } from '../../handlers/routes/recipe/CreateHandler';
import { updateHandler } from '../../handlers/routes/recipe/UpdateHandler';
import { deleteHandler } from '../../handlers/routes/recipe/DeleteHandler';

const router: Router = Router();

router.get('/list', getListHandler);

router.post('/create', createHandler);

router.put('/update', updateHandler);

router.delete('/delete', deleteHandler);

export default router;