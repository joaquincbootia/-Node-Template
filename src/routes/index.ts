// src/routes/index.ts
import express from 'express';
import { UserController } from '../controllers/userController';

const router = express.Router();

router.get('/', UserController.getUser);

export default router;
