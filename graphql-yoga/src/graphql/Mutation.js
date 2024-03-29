import Movie from "../models/Movie.js";
import User from "../models/User.js";

const Mutation = {

    async createMovie( _ , { title, description, likes, image, date_of_released } ) {
        const newMovie = { title, description, likes, image, date_of_released };
        const movie = await Movie.create( newMovie ); //returns { }
        return await Movie.find()
    },
    async updateMovie( _, { _id, title, description, likes, image, date_of_released } ) {
        // const newMovie = { title, description, likes, image, date_of_released };
        return await Movie.findByIdAndUpdate(_id, { title, description, likes, image, date_of_released }, {new: true})
    },
    async deleteMovie(_, {_id}){
        await Movie.findByIdAndDelete( _id );
        return await Movie.find();
    },
    async createUser( _, { email, password } ) {
        const newUser = { email, password };
        const user = await User.create( newUser );
        return await User.find();
    },
}

export default Mutation;