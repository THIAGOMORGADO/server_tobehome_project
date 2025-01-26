import { Response } from "express";
import { EError } from "./../typing/error"

export function Success(res: Response, body: Record<string, any>){
    res.status(200).json(body);
}

export function Created(res: Response, body: Record<string, any>){
    res.status(201).json(body)
}

export function BadRequestErro(res: Response, message: any){
    res.status(400).json({message})
}

export function UnauthorizedError(res: Response, message: any){
    res.status(401).json({message})
}

export function ForbiddenError(res: Response, message: any){
    res.status(403).json({message})
}

export function notFoundError(res: Response, message: any){
    res.status(404).json({message})
}

export function internalError(res: Response){
    res.status(500).json({message: 'server internal error'})
}

export function ResponseError(res: Response, err: Error){

    const func: (res: Response, message: any) => void = {
        [EError.NOT_FOUND]: notFoundError,
        [EError.BAD_REQUEST]: BadRequestErro,
        [EError.UNAUTHORIZED]: UnauthorizedError,
        [EError.FORBIDDEN]: ForbiddenError
    }[err.name] || internalError

    func(res, err.message)
}