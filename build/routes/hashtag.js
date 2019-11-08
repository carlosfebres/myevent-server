"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const hashtag_1 = require("../controllers/hashtag");
const router = express.Router();
/**
 * GET /hashtag
 */
router.get('/', hashtag_1.getAllHashtags);
exports.default = router;
