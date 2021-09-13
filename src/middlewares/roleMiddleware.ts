import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../repositories/implementations/UsersRepository";

const userRepository = new UsersRepository();

export const roleMiddleware = (roles: Array<string>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const userId = req.userId;

        try {
            console.log(userId)
            const user = await userRepository.findById(userId);
            if (roles.indexOf(user.role.name) > -1) next();
            else res.status(401).send();
        } catch {
            res.status(401).send();
        }
    }
}