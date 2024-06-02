import { fromToAnyLength } from '../controllers/lengthConvs.controller';
import { Router } from 'express';

const router: Router = Router();

router.post('/fromto', fromToAnyLength);

export default router;
