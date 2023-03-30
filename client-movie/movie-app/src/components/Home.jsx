import React, { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_MOVIES } from "../graphql/Queries";
import { REMOVE_MOVIE } from "../graphql/Mutations";
import { Link } from "react-router-dom";
import { userState } from "../config/UserState";

export const Home = () => {
    const [searchMovie, { data, error }] = useLazyQuery(GET_MOVIES);
	const verifySession = userState((state) => state.session);
	console.log("session from home", verifySession);

	const [removeMovie] = useMutation( REMOVE_MOVIE, {
		refetchQueries: [{query: GET_MOVIES}]
	})

	useEffect( () => {
		console.log('use effect in home')
		searchMovie();
	}, []);

    if (data) {
		console.log(data);
	}

    if (error) return <h1>Error: {error}</h1>;

    return (
		<div className="flex gap-4 pt-4">
			{data &&
				data.getMovies.map(({  _id, title, description, likes, image, date_of_released }) => (
					<>
					<Link
						to="/create-movie"
						state= {{ _id, title, description, likes, image, date_of_released}}
						className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<a href="#">
							<img
								className="rounded-t-lg"
								src={image}
								alt
							/>
						</a>
						<div className="p-5">
							<a href="#">
								<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									{title}
								</h5>
							</a>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{description}
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{likes}
							</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{date_of_released}
							</p>
						</div>
					</Link>
						<div>
							<button
								onClick={async ( e ) => {
									await removeMovie( {
										variables: {_id}
									})
								}}
								type="button"
								class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove
							</button>
						</div>
					</>
				))}
		</div>
	);
};