import Router from 'express';
const router = Router();

import pacientesRoutes from './paciente';

router.use('/pacientes', pacientesRoutes);

export default router;
