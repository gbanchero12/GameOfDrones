"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class GambleController {
    static getResult(combination, gamble) {
        if (!lodash_1.default.isNil(combination[0]) && !lodash_1.default.isNil(combination[1])) {
            const ret = gamble.check_[combination[0]][combination[1]];
            return ret;
        }
        throw new Error('ERROR CODE: 1 - Both player must select an option first.');
    }
    static setCombination(gamble) {
        if (lodash_1.default.isNil(gamble.gamblePlayerOne) || lodash_1.default.isNil(gamble.gamblePlayerTwo)) {
            throw new Error('ERROR CODE: 2 - Both player must select an option first.');
        }
        gamble.combination_.push(gamble.gamblePlayerOne);
        gamble.combination_.push(gamble.gamblePlayerTwo);
    }
    ;
    //move to other class with persistence
    static controlOfTurn(turn, scorePlayerOne, scorePlayerTwo) {
        if (turn == 3 || scorePlayerOne == 3 || scorePlayerTwo == 3) {
            return false;
        }
        return true;
    }
}
exports.default = GambleController;
