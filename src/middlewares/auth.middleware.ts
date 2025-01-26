import { NextFunction, Request, Response } from "express";

export class AuthMiddleware {
    static Init(req: Request, res: Response, next: NextFunction){
        next()
    }
}