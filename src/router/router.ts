import { Router, Request, Response } from 'express';
import gambleHandler from '../handlers/gambleHandler';
import MYSQL from '../mysql/mysql';


const router = Router();

router.get('/gamble/:id/:id2', (req: Request, res: Response) => {
    gambleHandler.gambleHandler(req, res);
});

router.get('/statistics', (req: Request, res: Response) => {
    const query = 'SELECT * FROM table_statistics';
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

export default router;