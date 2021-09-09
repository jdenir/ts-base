import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { GetUserByEmailController } from "./GetUserByEmailController";
import { GetUserByEmailUseCase } from "./GetUserByEmailUseCase";

const usersRepository = new UsersRepository();

const getUserByEmailUseCase = new GetUserByEmailUseCase(
    usersRepository
);

const getUserByEmailController = new GetUserByEmailController(
    getUserByEmailUseCase
);

export { getUserByEmailUseCase, getUserByEmailController }