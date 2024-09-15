import { Request, Response } from 'express';
import { handleError } from "@/utils/handleError"

class UserController {
    getAll(req: Request, res: Response) {
        try {
            return res.json({status:true,message:"success"})
        } catch (error) {
            return handleError(error)
        }
    }

    getById(req: Request, res: Response) {
        try {
            return res.json({})
        } catch (error) {
            return handleError(error)
        }
    }

    create(req: Request, res: Response) {
        try {
            return res.json({})
        } catch (error) {
            return handleError(error)
        }
    }

    update(req: Request, res: Response) {
        try {
            return res.json({})
        } catch (error) {
            return handleError(error)
        }
    }

    delete(req: Request, res: Response) {
        try {
            return res.json({})
        } catch (error) {
            return handleError(error)
        }
    }
    
}

export default UserController;
