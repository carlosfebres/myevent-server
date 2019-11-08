import Event from '../models/event';
import {createEvent} from "../service/event";
import IEvent from "../types/event";

export default async function populate() {
    const eventNum = await Event.countDocuments({}).exec();
    if (!eventNum) {
        await createEvent({
            title: "Soccer Game",
            description: "We are going to be playing for 2 hours, from 3pm to 5pm today",
            hashtags: ['sports','outdoors','social'],
            coordinate: {
                lat: -33.464804724642306,
                lng: -70.61077263331788
            }
        } as IEvent);

        await createEvent({
            title: "Comedy Show",
            description: "Come tonight, we are waiting for you.",
            hashtags: ['show','social'],
            coordinate: {
                lat: -33.462907518291274,
                lng: -70.66107070922851
            }
        } as IEvent);

        console.log('Populated...');
    }
}
