import React from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";

export const MovieSubList = () => {

    const location = useLocation();
    console.log( 'movie info', location.state )
    const movieInfo = location.state.movieData

  return (

		<div className="flex gap-4 pt-4">
        {movieInfo &&
            movieInfo.map(({  _id, title, description, likes, image, date_of_released }) => (
                <>
                    <Link
                        to="/create-movie"
                        state={{   _id, title, description, likes, image, date_of_released  }}
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
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
                </>
            ))}
    </div>
  )
}