import express = require('express');
import {addEvent} from "../controllers/event";
const router = express.Router();

/**
 * POST /event
 * Create a new Event
 *
 */
router.post('/', addEvent);

export default router;
