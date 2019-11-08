import express = require('express');
import event from "./event";
const router = express.Router();

router.use('/event', event);

module.exports = router;
