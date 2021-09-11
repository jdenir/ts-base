import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";

export class AuthUserController {
    constructor(
        private authUserUseCase: AuthUserUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        try {
            const token = await this.authUserUseCase.execute({
                email, password
            });

            return res.status(200).json(token);
        } catch (e) {
            return res.status(401).json({
                message: e.message || 'Unauthorize'
            })
        }
    }
}