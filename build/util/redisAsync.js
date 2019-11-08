"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var app_1 = require("../app");
exports.get = util_1.promisify(app_1.redisClient.get).bind(app_1.redisClient);
