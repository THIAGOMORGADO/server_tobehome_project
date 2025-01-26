import { EError } from "../typing/error"

export class NotFundError extends Error {
    constructor(public message: string) {
        super(message)
        this.name = EError.NOT_FOUND
    }
}

export class BadRequestError extends Error {

    constructor(public message: string) {
        super(message)
        this.name = EError.BAD_REQUEST
    }
}

export class UnAuthorizedError extends Error {
    constructor(public message: string) {
        super(message)
        this.name = EError.UNAUTHORIZED
    }
}

export class ForbiddenError extends Error {
    constructor(public message: string) {
        super(message)
        this.name = EError.FORBIDDEN
    }
}