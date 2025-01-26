import { Response, Request } from "express"
import { Created, ResponseError, Success } from "../responses"
import { UserService } from "./user.service"

export class UserController {
    async create({ body }: Request, res: Response) {
        try {
            const userService = new UserService()
            const userCreated = await userService.create(body)

            return Created(res, userCreated)
        }
        catch(err){
            ResponseError(res, err as Error)
        }
    }

    async update({ body, params: { codigo } }: Request, res: Response) {
        try{
            const userService = new UserService()
            const user = await userService.update(codigo, body) 

            return Success(res, user)
        }
        catch(err){
            ResponseError(res, err as Error)
        }
        
    }
}