import _ from "lodash";

export default class Gamble {
    private _gamblePlayerOne: number | undefined;
    
    private _gamblePlayerTwo: number | undefined;
    
    private combination: number[];
    private check: any;
    
    constructor(gamblePlayerOne: number, gamblePlayerTwo: number) {
        this.gamblePlayerOne = gamblePlayerOne;
        this.gamblePlayerTwo = gamblePlayerTwo;
        this.combination = new Array<number>(0);
        this.check = [
            /*rock      0*/ [0, -1, 1],
            /*paper     1*/ [1, 0, -1],
            /*sissors   2*/ [-1, 1, 0]];
    }
   
    public get combination_(){ return this.combination; }

    public get check_(){ return this.check;}

    public get gamblePlayerOne(): number {
        return this._gamblePlayerOne!;
    }
    public set gamblePlayerOne(value: number) {
        this._gamblePlayerOne = value;
    }

    public get gamblePlayerTwo(): number {
        return this._gamblePlayerTwo!;
    }
    public set gamblePlayerTwo(value: number) {
        this._gamblePlayerTwo = value;
    }
    
}
