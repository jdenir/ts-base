import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
    userId: string;
    iat: number;
    exp: number;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers
    if (!authorization) return res.sendStatus(401);

    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, process.env.TOKEN_SECRET);
        const { userId } = data as TokenPayload;
        req.userId = userId;
        return next();
    } catch {
        return res.sendStatus(401);
    }
}