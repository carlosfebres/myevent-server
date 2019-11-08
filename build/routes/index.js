"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const event_1 = __importDefault(require("./event"));
const router = express.Router();
router.use('/event', event_1.default);
module.exports = router;
