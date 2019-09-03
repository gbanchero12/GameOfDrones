"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Gamble_1 = __importDefault(require("../models/Gamble"));
const gambleController_1 = __importDefault(require("../controller/gambleController"));
const turn_1 = __importDefault(require("../models/turn"));
const mysql_1 = __importDefault(require("../mysql/mysql"));
class gambleHandler {
    static gambleHandler(req, res) {
        //gamble logic
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
            const query = `INSERT INTO table_statistics (ID, PLAYER, SCORE) VALUES (NULL,"${winner}",1);`;
            mysql_1.default.runQuery(query, (err) => {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        error: err
                    });
                }
                else {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader("Content-Type", "application/json");
                    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                    res.json({
                        movePlayerOne,
                        movePlayerTwo,
                        result,
                        controlOfTurn,
                        turn: gambleHandler.turn,
                        winner
                    });
                }
            });
            this.turn = new turn_1.default();
        }
        else {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader("Content-Type", "application/json");
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
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
    static get _turn() {
        return gambleHandler.turn;
    }
    static set _turn(value) {
        gambleHandler.turn = value;
    }
}
exports.default = gambleHandler;
