"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Turn {
    constructor() {
        this.numberOfTurn = 0;
        this.numberOfTurn = 0;
        this.scorePlayerOne = 0;
        this.scorePlayerTwo = 0;
    }
    get numberOfTurn_() {
        return this.numberOfTurn;
    }
    set numberOfTurn_(value) {
        this.numberOfTurn = value;
    }
    get scorePlayerOne_() {
        return this.scorePlayerOne;
    }
    set scorePlayerOne_(value) {
        this.scorePlayerOne = value;
    }
    get scorePlayerTwo_() {
        return this.scorePlayerTwo;
    }
    set scorePlayerTwo_(value) {
        this.scorePlayerTwo = value;
    }
    addTurn() {
        this.numberOfTurn_++;
    }
    updateScore(result) {
        //player 1 win
        if (result == 1)
            this.scorePlayerOne++;
        //player 2 win
        if (result == -1)
            this.scorePlayerTwo++;
    }
    evaluateGame() {
        if (this.numberOfTurn == 3 && this.scorePlayerOne_ > this.scorePlayerTwo_)
            console.log('Player 1 wins');
        if (this.numberOfTurn == 3 && this.scorePlayerOne_ < this.scorePlayerTwo_)
            console.log('Player 2 wins');
        if (this.numberOfTurn == 3 && this.scorePlayerOne_ == this.scorePlayerTwo_)
            console.log('Drow');
    }
}
exports.default = Turn;
