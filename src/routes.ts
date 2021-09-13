import { Router } from "express";
import { authUserController } from "./useCases/AuthUser";
import { createUserController } from "./useCases/CreateUser";
import { getUserByEmailController } from "./useCases/GetUserByEmail";

import authMiddleware from "./middlewares/authMiddleware";
import { roleMiddleware } from "./middlewares/roleMiddleware";

const router = Router();

router.post('/users', async (req, res) => await createUserController.handle(req, res));
router.get('/users/:email', [authMiddleware, roleMiddleware(['admin'])], async (req, res) => await getUserByEmailController.handle(req, res));

router.post('/auth', async (req, res) => await authUserController.handle(req, res));

export { router }