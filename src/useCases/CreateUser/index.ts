import { SecurityHelper } from "../../helpers/implementations/SecurityHelper";
import { RolesRepository } from "../../repositories/implementations/RolesRepository";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const usersRepository = new UsersRepository();
const rolesRepository = new RolesRepository();

const securityHelper = new SecurityHelper();

const createUserUseCase = new CreateUserUseCase(
    usersRepository, rolesRepository, securityHelper
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }