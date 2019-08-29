import { Router, Request, Response } from 'express';

const router = Router();

router.get('/gamble/:id', (req: Request, res: Response)=> {

    const id = req.params.id;

    res.json({
        ok: true,
        mensaje: 'Todo esta bien!',
        id
    })
})

export default router;