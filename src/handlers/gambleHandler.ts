import Gamble from '../models/Gamble'
import gambleController from '../controller/gambleController';

export default class gambleHandler {

    private static turn: number = 0;
    private static scorePlayerOne: number = 0;
    private static scorePlayerTwo: number = 0;

    public static gambleHandler(req: any, res: any) {
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
        const result = gambleController.getResult(gamble.combination_, gamble);

        //add one turn
        this.turn++;
        
        //player 1 win
        if (result == 1) this.scorePlayerOne++;

        //player 2 win
        if (result == -1) this.scorePlayerTwo++;

        if (this.turn == 3 && this.scorePlayerOne > this.scorePlayerTwo) console.log('Player 1 wins');
        if (this.turn == 3 && this.scorePlayerOne < this.scorePlayerTwo) console.log('Player 2 wins');
        if (this.turn == 3 && this.scorePlayerOne == this.scorePlayerTwo) console.log('Drow');

         //controlate the logic of the turns
         if (!gambleController.controlOfTurn(gambleHandler.turn,
            gambleHandler.scorePlayerOne, gambleHandler.scorePlayerTwo)) {
            this.turn = 0;
            this.scorePlayerOne = 0;
            this.scorePlayerTwo = 0;
        }

        res.json({
            movePlayerOne,
            movePlayerTwo,
            result,
            controlOfTurn: gambleController.controlOfTurn(gambleHandler.turn,
                gambleHandler.scorePlayerOne, gambleHandler.scorePlayerTwo),
            turn: gambleHandler.turn,
            scorePlayerOne: this.scorePlayerOne,
            scorePlayerTwo: this.scorePlayerTwo
        })
    }

}