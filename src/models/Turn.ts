
export default class Turn{

    private numberOfTurn: number = 0;  
    private scorePlayerOne: number | undefined;    
    private scorePlayerTwo: number | undefined;   

    constructor(){
        this.numberOfTurn = 0;
        this.scorePlayerOne = 0;
        this.scorePlayerTwo = 0;
    }

    public get numberOfTurn_(): number {
        return this.numberOfTurn;
    }

    public set numberOfTurn_(value: number) {
        this.numberOfTurn = value;
    }

    public get scorePlayerOne_(): number | undefined {
        return this.scorePlayerOne;
    }

    public set scorePlayerOne_(value: number | undefined) {
        this.scorePlayerOne = value;
    }

    public get scorePlayerTwo_(): number | undefined {
        return this.scorePlayerTwo;
    }

    public set scorePlayerTwo_(value: number | undefined) {
        this.scorePlayerTwo = value;
    }
    
    public addTurn(){
        this.numberOfTurn_++;
    }

    public updateScore(result: number): void {
         //player 1 win
         if (result == 1) this.scorePlayerOne!++;

         //player 2 win
         if (result == -1) this.scorePlayerTwo!++;
    }

    public evaluateGame(): string {
        if (this.numberOfTurn == 3 && this.scorePlayerOne_! > this.scorePlayerTwo_!) return 'Player 1';
        if (this.numberOfTurn == 3 && this.scorePlayerOne_! < this.scorePlayerTwo_!) return 'Player 2';
        if (this.numberOfTurn == 3 && this.scorePlayerOne_! == this.scorePlayerTwo_!) return 'Draw';
        
        if (this.numberOfTurn == 3)
        throw new Error('ERROR CODE:3 - The winner was not detected');
    
        return '';
    }

}