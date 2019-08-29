"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Gamble_1 = __importDefault(require("../models/Gamble"));
const gambleController_1 = __importDefault(require("../controller/gambleController"));
const turn_1 = __importDefault(require("../models/turn"));
class gambleHandler {
    static gambleHandler(req, res) {
        if (this.turn == null) {
            this.turn = new turn_1.default;
        }
        //move player 1
        const id = Number(req.params.id);
        //move player 2
        const id2 = Number(req.params.id2);
        const gamble = new Gamble_1.default(id, id2);
        gambleController_1.default.setCombination(gamble);
        //obteining the moves of the players
        const movePlayerOne = gamble.combination_[0];
        const movePlayerTwo = gamble.combination_[1];
        //calculate of the result
        const result = gambleController_1.default.getResult(gamble.combination_, gamble);
        //add one turn
        this.turn.addTurn();
        this.turn.updateScore(result);
        const winner = this.turn.evaluateGame();
        //controlate the logic of the turns
        const controlOfTurn = gambleController_1.default.controlOfTurn(this.turn.numberOfTurn_, this.turn.scorePlayerOne_, this.turn.scorePlayerTwo_);
        if (!controlOfTurn) {
            this.turn = new turn_1.default();
        }
        res.json({
            movePlayerOne,
            movePlayerTwo,
            result,
            controlOfTurn,
            turn: gambleHandler.turn,
            winner
        });
    }
}
exports.default = gambleHandler;
