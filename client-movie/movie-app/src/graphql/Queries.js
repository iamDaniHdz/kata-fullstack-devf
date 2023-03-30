import { gql } from "@apollo/client"

export const GET_MOVIES = gql`

query getMovies{
    getMovies {
        _id
        title
        description
        likes
        image
        date_of_released
    }
}
`

export const LOGIN =  gql`
    query login($email:String, $password: String){
        login(email: $email, password: $password){
            _id
            email
            password
        }
    }

`

export const GET_MOVIE_BY_TITLE = gql`
query getMovieByTitle($title:String){
    getMovieByTitle(title: $title){
        _id
        title
        description
        likes
        image
        date_of_released        
    }
}
`