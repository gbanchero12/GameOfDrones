"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gambleHandler_1 = __importDefault(require("../handlers/gambleHandler"));
const mysql_1 = __importDefault(require("../mysql/mysql"));
const turn_1 = __importDefault(require("../models/turn"));
const router = express_1.Router();
router.get('/gamble/:id/:id2', (req, res) => {
    gambleHandler_1.default.gambleHandler(req, res);
});
router.get('/statistics', (req, res) => {
    const query = 'SELECT ID, PLAYER, SUM(SCORE) as SCORE FROM table_statistics GROUP BY PLAYER';
    mysql_1.default.runQuery(query, (err, statistics) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                statistics: statistics
            });
        }
    });
});
router.post('/register/', (req, res) => {
    const query = req.query;
    if (query.namePlayerOne != undefined && query.namePlayerTwo != undefined) {
        gambleHandler_1.default._turn = new turn_1.default();
        gambleHandler_1.default._turn.namePlayer1_ = query.namePlayerOne;
        gambleHandler_1.default._turn.namePlayer2_ = query.namePlayerTwo;
        res.json({ ok: true });
    }
});
exports.default = router;
