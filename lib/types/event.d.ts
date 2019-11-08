import Coordinate from "./coordinate";
import {Document} from "mongoose";

export default interface IEvent extends Document {
    title: string;
    coordinate: Coordinate;
    description: string;
    hashtags: string[];
    date: string;
}
