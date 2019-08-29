"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Gamble_1 = __importDefault(require("../models/Gamble"));
const gambleController_1 = __importDefault(require("../controller/gambleController"));
const router = express_1.Router();
router.get('/gamble/:id/:id2', (req, res) => {
    const id = Number(req.params.id);
    const id2 = Number(req.params.id2);
    const gamble = new Gamble_1.default(id, id2);
    gambleController_1.default.setCombination(gamble);
    const combination1 = gamble.combination_[0];
    const combination2 = gamble.combination_[1];
    const result = gambleController_1.default.getResult(gamble.combination_, gamble);
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!',
        id,
        gamble,
        combination1,
        combination2,
        result
    });
});
exports.default = router;
