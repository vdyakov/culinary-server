import { Router } from 'express';
import { getListHandler } from '../../handlers/routes/preference-type/GetListHandler';
import { createHandler } from '../../handlers/routes/preference-type/CreateHandler';
import { updateHandler } from '../../handlers/routes/preference-type/UpdateHandler';
import { deleteHandler } from '../../handlers/routes/preference-type/DeleteHandler';

const router: Router = Router();

router.get('/list', getListHandler);

router.post('/create', createHandler);

router.put('/update', updateHandler);

router.delete('/delete', deleteHandler);

export default router;