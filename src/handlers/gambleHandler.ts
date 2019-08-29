import Gamble from '../models/Gamble'
import gambleController from '../controller/gambleController';
import Turn from '../models/turn';

export default class gambleHandler {

    private static turn: Turn;
    
    public static gambleHandler(req: any, res: any) {

        if(this.turn == null){
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
            this.turn = new Turn();
        }

        res.json({
            movePlayerOne,
            movePlayerTwo,
            result,
            controlOfTurn,
            turn: gambleHandler.turn,
            winner
        })
    }

}