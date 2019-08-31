import Gamble from '../models/Gamble'
import gambleController from '../controller/gambleController';
import Turn from '../models/turn';
import MYSQL from '../mysql/mysql';

export default class gambleHandler {

    private static turn: Turn;

    public static gambleHandler(req: any, res: any) {

        if (this.turn == null) {
            this.turn = new Turn;
        }

        //move player 1
        const id = Number(req.params.id);
        //move player 2
        const id2 = Number(req.params.id2);

        const gamble = new Gamble(id, id2);

        gambleController.setCombination(gamble);

        //obteining the moves of the players
        const movePlayerOne = gamble.combination_[0];
        const movePlayerTwo = gamble.combination_[1];

        //calculate of the result
        const result: number = gambleController.getResult(gamble.combination_, gamble);

        //add one turn
        this.turn.addTurn();

        this.turn.updateScore(result);

        const winner = this.turn.evaluateGame();

        //controlate the logic of the turns
        const controlOfTurn: boolean = gambleController.controlOfTurn(this.turn.numberOfTurn_,
            this.turn.scorePlayerOne_!, this.turn.scorePlayerTwo_!);
        if (!controlOfTurn) {
            const query = `INSERT INTO table_statistics (ID, PLAYER, SCORE) VALUES (NULL,"${winner}",1);`;
            MYSQL.runQuery(query, (err: any) => {
                if (err) {
                    
                    res.status(400).json({
                        ok: false,
                        error: err
                    });
                }else{
                    res.setHeader('Access-Control-Allow-Origin','localhost:4200');
                    res.json({
                        movePlayerOne,
                        movePlayerTwo,
                        result,
                        controlOfTurn,
                        turn: gambleHandler.turn,
                        winner
                    });
                }
            });
            this.turn = new Turn();
        } else {
            res.setHeader('Access-Control-Allow-Origin','localhost:4200');
            res.json({
                movePlayerOne,
                movePlayerTwo,
                result,
                controlOfTurn,
                turn: gambleHandler.turn,
                winner
            });
        }


    }


}