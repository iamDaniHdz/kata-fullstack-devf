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