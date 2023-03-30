import { gql } from "@apollo/client"

export const CREATE_MOVIE = gql`
mutation createMovie($title:String, $description:String, $likes:Int, $image:String, $date_of_released:Int){
  
    createMovie(title:$title, description:$description, likes:$likes, image: $image, date_of_released:$date_of_released){
		_id
        title
        description
        likes
        image
        date_of_released  
    }
}
`
export const REMOVE_MOVIE = gql`
mutation deleteMovie($_id:ID){
    deleteMovie(_id: $_id){
	    _id
        title
        description
        likes
        image
        date_of_released  
    }
}
`
export const UPDATE_MOVIE = gql`
mutation updateMovie($_id: ID, $title:String, $description:String, $likes:Int, $image:String, $date_of_released:Int){
    updateMovie(_id: $_id, title:$title, description:$description, likes:$likes, image: $image, date_of_released:$date_of_released){
        _id
        title
        description
        likes
        image
        date_of_released  
    }
}
`