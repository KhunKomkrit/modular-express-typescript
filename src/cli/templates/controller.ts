import { NextFunction, Request, Response } from 'express';
import { handleError, handleSuccess } from "@/utils/handleResponse"
import { TLang } from "@/interfaces/lang.interface";

class MyController {
    private lang: TLang = 'th'
    getAll(req: Request, res: Response) {
        try {
            const { lang } = req.query
            this.lang = lang as TLang || 'th';
            return res.json(handleSuccess([], this.lang))
        } catch (error) {
            return handleError(error, this.lang, res);
        }
    }

    getById(req: Request, res: Response) {
        try {
            const { lang } = req.query
            this.lang = lang as TLang || 'th';
            return res.json(handleSuccess([], this.lang))
        } catch (error) {
            return handleError(error, this.lang, res);
        }
    }

    create(req: Request, res: Response) {
        try {
            const { lang } = req.query
            this.lang = lang as TLang || 'th';
            return res.json(handleSuccess([], this.lang))
        } catch (error) {
            return handleError(error, this.lang, res);
        }
    }

    update(req: Request, res: Response) {
        try {
            const { lang } = req.query
            this.lang = lang as TLang || 'th';
            return res.json(handleSuccess([], this.lang))
        } catch (error) {
            return handleError(error, this.lang, res);
        }
    }

    delete(req: Request, res: Response) {
        try {
            const { lang } = req.query
            this.lang = lang as TLang || 'th';
            return res.json(handleSuccess([], this.lang))
        } catch (error) {
            return handleError(error, this.lang, res);
        }
    }

}

export default MyController;
