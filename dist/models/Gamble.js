"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Gamble {
    constructor(gamblePlayerOne, gamblePlayerTwo) {
        this.gamblePlayerOne = gamblePlayerOne;
        this.gamblePlayerTwo = gamblePlayerTwo;
        this.combination = new Array(0);
        this.check = [
            /*rock      0*/ [0, -1, 1],
            /*paper     1*/ [1, 0, -1],
            /*sissors   2*/ [-1, 1, 0]
        ];
    }
    get combination_() { return this.combination; }
    get check_() { return this.check; }
    get gamblePlayerOne() {
        return this._gamblePlayerOne;
    }
    set gamblePlayerOne(value) {
        this._gamblePlayerOne = value;
    }
    get gamblePlayerTwo() {
        return this._gamblePlayerTwo;
    }
    set gamblePlayerTwo(value) {
        this._gamblePlayerTwo = value;
    }
}
exports.default = Gamble;
