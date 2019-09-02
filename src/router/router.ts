import { Router, Request, Response } from 'express';
import gambleHandler from '../handlers/gambleHandler';
import MYSQL from '../mysql/mysql';


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

router.post('/register', (req: Request, res: Response)=>{
    /*DEPRECATED*/
    gambleHandler.gambleHandler(req,res);
    
})

export default router;
