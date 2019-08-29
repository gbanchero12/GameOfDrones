import { Router, Request, Response } from 'express';
import gambleController from '../controller/gambleController'

const router = Router();

router.post('/gamble/:id', (req: Request, res: Response)=> {

    const id = req.params.id;

    res.json({
        ok: true,
        mensaje: 'Todo esta bien!',
        id
    })
})

export default router;