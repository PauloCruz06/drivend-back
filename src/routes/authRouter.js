import { loginUser, createUser } from '../controlles/authControllers.js';
import { Router } from 'express';

const router = Router();

router.post('/login', loginUser);
router.post('/cadastrar', createUser);

export default router;