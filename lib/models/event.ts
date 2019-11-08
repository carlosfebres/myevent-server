import {Schema, model} from 'mongoose';
import IEvent from "../types/event";

export const EventSchema = new Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        coordinate: {
            lng: {type: Number, required: true},
            lat: {type: Number, required: true}
        },
        hashtags: [{type: Schema.Types.ObjectId, ref: 'Hashtag'}]
    },
    {timestamps: {createdAt: true}}
);

export default model<IEvent>('Event', EventSchema);
