import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { asyncMovieInfo } from '../actions/moviesAction'
import './components.css'

const Movie = (props) => {
    const [modalToggle, setModalToggle] = useState(false);

    const { movie } = props;
    const { Poster, Year, Title, imdbID } = movie;

    const dispatch = useDispatch();

    const movieInfo = useSelector((store) => {
        return store.movieInfo
    })

    const viewMovieInfo = (id) => {
        setModalToggle(!modalToggle);
        dispatch(asyncMovieInfo(id));
    }

    console.log(movieInfo);

    const closeModal = (e) => {
        e.preventDefault()
        setModalToggle(!modalToggle);
    }

    return (
        <>
            <Modal isOpen={modalToggle} className="col-12 "  >
                <ModalHeader className="align-self-center " >Movie details</ModalHeader>
                <ModalBody>
                    <div className="row ">
                        <div className="col-md-4">
                            <img src={movieInfo.Poster} className="thumbnail border border-dark shadow-lg" />
                        </div>
                        <div className="col-md-8  ">
                            <h2 className=" p-2 rounded border border-dark modal-h2-color" >{movieInfo.Title}</h2>
                            <ul className="list-group border border-dark">
                                <li className="list-group-item border border-dark shadow-lg"><strong>Genre:</strong> {movieInfo.Genre}</li>
                                <li className="list-group-item border border-dark shadow-lg"><strong>Released:</strong> {movieInfo.Released}</li>
                                <li className="list-group-item border border-dark shadow-lg"><strong>Rated:</strong> {movieInfo.Rated}</li>
                                <li className="list-group-item border border-dark shadow-lg"><strong>IMDB Rating:</strong> {movieInfo.imdbRating}</li>
                                <li className="list-group-item border border-dark shadow-lg"><strong>Director:</strong> {movieInfo.Director}</li>
                                <li className="list-group-item border border-dark shadow-lg"><strong>Writer:</strong> {movieInfo.Writer}</li>
                                <li className="list-group-item border border-dark shadow-lg"><strong>Actors:</strong> {movieInfo.Actors}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="well">
                            <hr/>
                            <h3>Plot</h3>
                            {movieInfo.Plot}
                            <hr />
                            <a href={`http://imdb.com/title/${movieInfo.imdbID}`} target="_blank" className="btn btn-info">View IMDB</a>
                            <a href="index.html" className="btn btn-danger mx-2" onClick={closeModal}>Go Back To Search</a>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
            <div className="movie shadow-lg">
                <img src={Poster} alt="movie" />
                <div className="movie-info" >
                    <h3>{Title}</h3>
                    <span className="p-2 border rounded bg-warning"><strong>{Year}</strong></span>

                </div>
                <button className="btn btn-sm btn-secondary border border-dark mb-3" onClick={() => { viewMovieInfo(imdbID) }} style={{ marginLeft: '5rem' }}>View Details</button>
            </div>
        </>
    )
}

export default Movie
