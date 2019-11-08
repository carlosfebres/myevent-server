import Coordinate from "./coordinate";
import {Document} from "mongoose";
import {IHashtagDoc} from "../models/hashtag";

export default interface IEvent extends Document {
    title: string;
    coordinate: Coordinate;
    description: string;
    hashtags: IHashtagDoc[] | string[];
    date?: string;
}
