"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const event_1 = require("../controllers/event");
const router = express.Router();
/**
 * POST /event
 */
router.post('/', event_1.addEvent);
exports.default = router;
