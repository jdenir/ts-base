import { NextFunction, Request, Response } from "express";
import { TokenHelper } from "../helpers/implementations/TokenHelper";

const tokenHelper = new TokenHelper();

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers
    if (!authorization) return res.sendStatus(401);

    const token = authorization.replace('Bearer', '').trim();

    try {
        req.userId = tokenHelper.getUserId(token);
        return next();
    } catch {
        return res.sendStatus(401);
    }
}