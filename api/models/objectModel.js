import {Schema, model} from "mongoose";

const objectSchema = new Schema({
    category: {type: String, required: true},
    price: {type: Number},
    wPriceFrom: {type: Number},
    wPriceTo: {type: Number},
    location: {type: String},
    wLocation: {type: String},
    rooms: {type: Number},
    wRooms: {type: Number},
    want: {type: String},
    status: {type: Boolean},
    marka: {type: String},
    wMarka: {type: String},
    square: {type: Number},
    wSquareFrom: {type: Number},
    wSquareTo: {type: Number},
})

export default model('Object', objectSchema);