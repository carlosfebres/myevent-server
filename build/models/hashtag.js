"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.HashtagSchema = new mongoose_1.Schema({
    name: { type: String, required: true }
});
exports.HashtagSchema.statics.retriveHashtags = (hashtags) => Promise.all(hashtags.map((hashtag) => Hashtag
    .findOneAndUpdate({ name: hashtag }, { name: hashtag }, { upsert: true })
    .exec()));
const Hashtag = mongoose_1.model('Hashtag', exports.HashtagSchema);
exports.default = Hashtag;
