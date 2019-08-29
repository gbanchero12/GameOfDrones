import { Router, Request, Response } from 'express';
import gambleHandler from '../handlers/gambleHandler';


const router = Router();

router.get('/gamble/:id/:id2', (req: Request, res: Response)=> {
    gambleHandler.gambleHandler(req, res);    
});

export default router;