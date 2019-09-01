"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Turn {
    constructor() {
        this.numberOfTurn = 0;
        this.namePlayer1 = 'Player 1';
        this.namePlayer2 = 'Player 2';
        this.numberOfTurn = 0;
        this.scorePlayerOne = 0;
        this.scorePlayerTwo = 0;
    }
    set namePlayer1_(value) {
        this.namePlayer1 = value;
    }
    set namePlayer2_(value) {
        this.namePlayer2 = value;
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
            return this.namePlayer1;
        if (this.numberOfTurn == 3 && this.scorePlayerOne_ < this.scorePlayerTwo_)
            return this.namePlayer2;
        if (this.numberOfTurn == 3 && this.scorePlayerOne_ == this.scorePlayerTwo_)
            return 'Draw';
        if (this.numberOfTurn == 3)
            throw new Error('ERROR CODE:3 - The winner was not detected');
        return '';
    }
}
exports.default = Turn;
