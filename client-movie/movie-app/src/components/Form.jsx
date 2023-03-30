import React,{useState, useEffect} from "react";
import { CREATE_MOVIE } from "../graphql/Mutations";
import { UPDATE_MOVIE } from "../graphql/Mutations";
import { useMutation } from "@apollo/client";
import { useNavigate, useLocation } from "react-router-dom";

export const Form = () => {
	const navigate = useNavigate()
	const location = useLocation();
	console.log( 'movie info', location.state )

	const [_id, setId] = useState( "" );
	const [title, setTitle] = useState( "" );
	const [description, setDescription] = useState( "" )
	const [likes, setLikes] = useState( "" )
	const [image, setImage] = useState( "" );
	const [date_of_released, setDateOfReleased] = useState( "" );

	const currentState = location.state;
	const movieId = currentState && currentState !== undefined ? currentState._id : _id
	const movieTitle = currentState && currentState !== undefined ?  currentState.title : title ;
	const movieDescription = currentState && currentState !== undefined ? currentState.description : description;
	const movieLikes = currentState && currentState !== undefined ? currentState.likes : likes;
	const movieImage = currentState && currentState !== undefined ? currentState.image : image;
	const movieDateOfReleased = currentState && currentState !== undefined ? currentState.date_of_released : date_of_released;

	const [createMovie] = useMutation(CREATE_MOVIE, {})
	const [updateMovie] = useMutation(UPDATE_MOVIE, {})

	useEffect( () => {
		if ( currentState ) {
			setId(movieId)
			setTitle( movieTitle )
			setDescription( movieDescription )
			setLikes( movieLikes )
			setImage(movieImage)
			setDateOfReleased(movieDateOfReleased)
	 	}
	}, [])

	return (
		<form onSubmit={async ( event ) => {
			event.preventDefault()
			
			if ( currentState ) {
				console.log("Actualizar");
				await updateMovie({variables: {_id,title,description,likes,image,date_of_released}})
			} else {
				console.log("Crear");
				await createMovie( {
					variables : {title,description,likes,image,date_of_released}
				})
			}
			
          	navigate('/home')
		}}
		>
			<div className="mb-6">
				<label
					htmlFor="title"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Title
				</label>
				<input
					type="text"
					onChange={(event) => {
						setTitle(event.target.value)
					}}
					id="title"
					value={title}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
			</div>

			<div className="mb-6">
				<label
					htmlFor="description"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Description
				</label>
				<input
					type="text"
					onChange={(event) => {
						setDescription(event.target.value)
					}}
					id="description"
					value={description}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
			</div>

			<div className="mb-6">
				<label
					htmlFor="likes"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Likes
				</label>
				<input
					type="number"
					onChange={(event) => {
						setLikes(event.target.value)
					}}
					id="likes"
					value={likes}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
			</div>

			<div className="mb-6">
				<label
					htmlFor="image"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Image link
				</label>
				<input
					type="text"
					onChange={(event) => {
						setImage(event.target.value)
					}}
					id="image"
					value={image}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
			</div>

            <div className="mb-6">
				<label
					htmlFor="date_of_released"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Date of release
				</label>
				<input
					type="number"
					onChange={(event) => {
						setDateOfReleased(event.target.value)
					}}
					id="date_of_released"
					value={date_of_released}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
			</div>

			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				{currentState ? "Update Movie" : "Add Movie"}
			</button>
		</form>
	);
};