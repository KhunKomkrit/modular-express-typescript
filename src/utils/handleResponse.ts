import {TLang} from "@/interfaces/lang.interface";
import { Response } from 'express';

export const handleSuccess = (data: Record<string, any>, lang = 'th', statusCode = 2000,) => {
    statusCode = data.length > 0 ? statusCode : 2001
    return {
        status: true,
        statusCode,
        message: msgLang(statusCode, lang as TLang),
        data
    }
}

const msgLang = (statusCode: number | string, lang: TLang = 'th'): string => {
    const msg: Record<string, any> = {
        'th': {
            '2000': 'สำเร็จ',
            '2001': 'ไม่พบข้อมูล',
            '9999': 'ระบบไม่สามารถดึงข้อมูลได้'
        },
        'en': {
            '2000': 'Success.',
            '2001': 'Data Is Empty.',
            '9999': 'Error other.'
        }
    }
    return msg[lang][statusCode] ?? msg['th'][statusCode]
}

export const handleError = (error: unknown,lang: TLang = 'th',res: Response) => {
    console.log(error,lang,res);
    
    return res.status(400).json({
        status: false,
        statusCode: 9999,
        message: msgLang(9999,lang)
    })
}