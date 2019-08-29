import _ from "lodash";
import Gamble from '../models/Gamble';

export default class GambleController {
      
    public static getResult(combination:number[], gamble: Gamble): any {
        if(!_.isNil(combination[0]) && !_.isNil(combination[1])){
            const ret = gamble.check_[combination[0]][combination[1]];
            return ret;
        }
        throw new Error('ERROR CODE: 1 - Both player must select an option first.');
    }

    public static setCombination(gamble: Gamble): void {
        if (_.isNil(gamble.gamblePlayerOne) || _.isNil(gamble.gamblePlayerTwo)) {
            throw new Error('ERROR CODE: 2 - Both player must select an option first.');
        }
        gamble.combination_.push(gamble.gamblePlayerOne);
        gamble.combination_.push(gamble.gamblePlayerTwo);
    };

     //move to other class with persistence

    public static controlOfTurn(turn: number, scorePlayerOne: number, scorePlayerTwo: number): boolean{

        if(turn == 3 || scorePlayerOne == 3 || scorePlayerTwo == 3){            
            return false;            
            }
        return true;
    }

}
