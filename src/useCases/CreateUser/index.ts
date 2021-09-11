import { SecurityHelper } from "../../helpers/implementations/SecurityHelper";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const usersRepository = new UsersRepository();

const securityHelper = new SecurityHelper();

const createUserUseCase = new CreateUserUseCase(
    usersRepository, securityHelper
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }