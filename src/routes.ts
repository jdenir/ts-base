import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { getUserByEmailController } from "./useCases/GetUserByEmail";

const router = Router();

router.post('/users', async (req, res) => await createUserController.handle(req, res));
router.get('/users/:email', async (req, res) => await getUserByEmailController.handle(req, res));

export { router }