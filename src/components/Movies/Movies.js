import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MovieOneCard} from "../MovieOneCard/MovieOneCard";

import css from './movies.module.css';
import {Loading} from "../Loading/Loading";


const Movies = () => {

    const dispatch = useDispatch();
    const {movies, isLoading, searchValue} = useSelector(state => state.movies);
    let filteredMovies = movies

    const [query] = useSearchParams({page: '1'});
    const page = query.get('page');

    useEffect(() => {
        dispatch(moviesActions.getAll({page}))
    }, [dispatch, page])


    if (searchValue) {
        filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase()))
    }

    return (
        <div className={css.list_card}>
            {isLoading && !searchValue && <Loading/>}
            {filteredMovies.length > 0 ? filteredMovies.map(movie => <MovieOneCard key={movie.id}
                                                                                  movie={movie}/>) : 'Not Found Movie'}
        </div>
    );
};

export {Movies};