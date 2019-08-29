import { Router, Request, Response } from 'express';

const router = Router();

router.get('/gamble', (req: Request, res: Response)=> {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!'
    })
})

export default router;