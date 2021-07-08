import React, { useEffect, useState } from 'react'
import { Link, Route, withRouter, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncMoviesList } from '../actions/moviesAction';
import { asyncSearchedMovies } from '../actions/moviesAction';

import './components.css'
import Movie from './Movie';


const MovieDashboard = (props) => {

    const [name,setName]=useState('');

    const movies = useSelector((store) => {
        return store.moviesList;
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncMoviesList())
    }, [])


    const handleChange=(e)=>{
        const result=e.target.value;
        setName(result);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(asyncSearchedMovies(name));
    }

    console.log(movies);
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-10 offset-2">
                        <form onSubmit={handleSubmit}>
                            <div className="w-50 mx-2 d-inline-block" >
                                <input type="text" className="form-control shadow-lg ml-3 border border-dark " 
                                    name="name"
                                    value={name}
                                    onChange={handleChange} placeholder="Search movie by name or release year" />
                            </div>
                            <input type="submit" className="btn btn btn-secondary" value="Get Movies"></input>
                        </form>
                    </div>
                </div>
            </div>
            <div className="movie-container p-5">

                {
                    movies.length > 0 && movies.map((movie) => {
                        return <Movie key={movie.imdbID} movie={movie} />
                    })
                }
            </div>
        </>
    )
}

export default withRouter(MovieDashboard)
