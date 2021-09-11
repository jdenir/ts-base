import { SecurityHelper } from "../../helpers/implementations/SecurityHelper";
import { TokenHelper } from "../../helpers/implementations/TokenHelper";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { AuthUserController } from "./AuthUserController";
import { AuthUserUseCase } from "./AuthUserUseCase";

const usersRepository = new UsersRepository();
const securityHelper = new SecurityHelper();
const tokenHelper = new TokenHelper();

const authUserUseCase = new AuthUserUseCase(
    usersRepository, securityHelper, tokenHelper
);

const authUserController = new AuthUserController(
    authUserUseCase
);

export { authUserUseCase, authUserController }