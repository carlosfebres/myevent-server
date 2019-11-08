"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = __importDefault(require("../models/event"));
const event_2 = require("../service/event");
async function populate() {
    const eventNum = await event_1.default.countDocuments({}).exec();
    if (!eventNum) {
        await event_2.createEvent({
            title: "Soccer Game",
            description: "We are going to be playing for 2 hours, from 3pm to 5pm today",
            hashtags: ['sports', 'outdoors', 'social'],
            coordinate: {
                lat: -33.464804724642306,
                lng: -70.61077263331788
            }
        });
        await event_2.createEvent({
            title: "Comedy Show",
            description: "Come tonight, we are waiting for you.",
            hashtags: ['show', 'social'],
            coordinate: {
                lat: -33.462907518291274,
                lng: -70.66107070922851
            }
        });
        console.log('Populated...');
    }
}
exports.default = populate;
