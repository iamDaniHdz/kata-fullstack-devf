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