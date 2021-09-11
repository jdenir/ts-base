import { Security } from "../../helpers/implementations/Security";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const usersRepository = new UsersRepository();

const security = new Security();

const createUserUseCase = new CreateUserUseCase(
    usersRepository, security
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }