import _ from "lodash";

export default class gambleController {
    private gamblePlayerOne: number;
    private gamblePlayerTwo: number;
    private combination: number[];
    private check: any;
    
    constructor(gamblePlayerOne: number, gamblePlayerTwo: number) {
        this.gamblePlayerOne = gamblePlayerOne;
        this.gamblePlayerTwo = gamblePlayerTwo;
        this.combination = new Array<number>(1);
        this.check = [
            /*rock*/    { 0: 0, 1: -1, 2: 1 },
            /*paper*/   { 3: 1, 4: 0, 5: -1 },
            /*sissors*/ { 6: -1, 7: 1, 8: 0 }]; 
    }

    public setGamblePlayerOne(gamblePlayerOne: number) { this.gamblePlayerOne = this.gamblePlayerOne; }

    public setGamblePlayerTwo(gamblePlayerOne: number) { this.gamblePlayerTwo = this.gamblePlayerTwo; }

    public getResult(combination:number[]): any {
        if(!_.isNil(combination[0]) && !_.isNil(combination[1])){
            return this.check[combination[0],combination[1]];
        }
        throw new Error('Both player must select an option first.');
    }

    public setCombination(): void {
        if (_.isNil(this.gamblePlayerOne) || _.isNil(this.gamblePlayerTwo)) {
            throw new Error('Both player must select an option first.');
        }
        this.combination.push(this.gamblePlayerOne);
        this.combination.push(this.gamblePlayerTwo);
    };




    

}
