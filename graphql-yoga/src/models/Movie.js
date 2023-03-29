import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    likes: {
        type: Number
    },
    image: {
        type: String
    },
    date_of_released: {
        type: Number
    }
});
export default model('Movie', movieSchema)