"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gambleHandler_1 = __importDefault(require("../handlers/gambleHandler"));
const router = express_1.Router();
router.get('/gamble/:id/:id2', (req, res) => {
    gambleHandler_1.default.gambleHandler(req, res);
});
exports.default = router;
