import { Request, Response } from "express";
import { GetUserByEmailUseCase } from "./GetUserByEmailUseCase";

export class GetUserByEmailController {
    constructor(
        private getUserByEmailUseCase: GetUserByEmailUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { email } = req.params;

        try {
            const user = await this.getUserByEmailUseCase.execute({
                email
            });

            if (!user) 
                return res.status(404).json({
                    message: 'Not found'
                });

            return res.status(200).json(user);
        } catch (e) {
            return res.status(400).json({
                message: e.message || 'Unexpected error'
            })
        }
    }
}