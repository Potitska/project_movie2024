import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MovieOneCard} from "../MovieOneCard/MovieOneCard";
import css from "./byGenre.module.css";

const MovieByGenre = () => {

    const key = useParams();


    const {movieByGenres} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.movieByGenre(key.genre_key))
    }, [dispatch, key])

    const {results} = movieByGenres;
    if (results) {
        return (
            <div className={css.movies_list}>
                {results.map(movie => <MovieOneCard key={movie.id} movie={movie}/>)}
            </div>
        );
    }
};

export {MovieByGenre};