import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const usersRepositoryMySQL = new UsersRepository();

const createUserUseCase = new CreateUserUseCase(
    usersRepositoryMySQL
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }