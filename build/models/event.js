"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.EventSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    coordinate: {
        lng: { type: Number, required: true },
        lat: { type: Number, required: true }
    },
    hashtags: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Hashtag' }]
}, { timestamps: { createdAt: true } });
exports.default = mongoose_1.model('Event', exports.EventSchema);
