import { Router, Request, Response } from 'express';
import gambleHandler from '../handlers/gambleHandler';
import MYSQL from '../mysql/mysql';
import Turn from '../models/turn';



const router = Router();

router.get('/gamble/:id/:id2', (req: Request, res: Response) => {
    gambleHandler.gambleHandler(req, res);
});

router.get('/statistics', (req: Request, res: Response) => {
    const query = 'SELECT ID, PLAYER, SUM(SCORE) as SCORE FROM table_statistics GROUP BY PLAYER';
    MYSQL.runQuery(query, (err: any, statistics: Object[], ) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        } else {
            res.json({
                ok: true,
                statistics: statistics
            });
        }

    })
});

router.post('/register/',(req: Request, res: Response)=>{
    
    const query = req.query;
    if(query.namePlayerOne != undefined && query.namePlayerTwo != undefined){

    gambleHandler._turn = new Turn();
    gambleHandler._turn.namePlayer1_ = query.namePlayerOne;
    gambleHandler._turn.namePlayer2_ = query.namePlayerTwo;
    res.json({ok: true});
    }
    res.sendStatus(400);
    
});

export default router;
