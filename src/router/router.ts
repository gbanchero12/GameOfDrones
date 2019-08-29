import { Router, Request, Response } from 'express';
import Gamble from '../models/Gamble'
import gambleController from '../controller/gambleController';

const router = Router();

router.get('/gamble/:id/:id2', (req: Request, res: Response)=> {

    const id = Number(req.params.id);
    const id2 = Number(req.params.id2);
    const gamble = new Gamble(id, id2);
    gambleController.setCombination(gamble);
    const combination1 = gamble.combination_[0];
    const combination2 = gamble.combination_[1];
    const result = gambleController.getResult(gamble.combination_, gamble);
    
    
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!',
        id,
        gamble,
        combination1,
        combination2,
        result        
    })
})

export default router;