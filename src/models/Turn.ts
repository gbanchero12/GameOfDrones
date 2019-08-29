

export default class Turn{

    private turn: number = 0;
    private scorePlayerOne: number = 0;
    private scorePlayerTwo: number = 0;

    constructor(){
        this.turn = 0;
        this.scorePlayerOne = 0;
        this.scorePlayerTwo = 0;
    }

    public addTurn(){
        this.turn++;
    }

    public updateScore(result: numeric){
         //player 1 win
         if (result == 1) this.scorePlayerOne++;

         //player 2 win
         if (result == -1) this.scorePlayerTwo++;
    }
}