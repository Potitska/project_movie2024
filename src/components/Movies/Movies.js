import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MovieOneCard} from "../MovieOneCard/MovieOneCard";

import css from './movies.module.css';


const Movies = ({searchText}) => {

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);
    const {isLoading} = useSelector(state => state.movies);

    const [query, setQuery] = useSearchParams({page:'1'});
    const page = query.get('page');

    useEffect(() => {
        dispatch(moviesActions.getAll({page}))
    }, [dispatch, page])

    return (
        <div>
            <div className={css.list_card}>
                {isLoading && <h1>Loading...</h1>}
                {movies
                    .filter((movie)=>movie.original_title.toLowerCase().includes(searchText.toString()))
                    .map(movie=><MovieOneCard key={movie.id} movie={movie}/>)}
            </div>
            {/*<div className={css.btnPagination}>*/}
            {/*    <button onClick={() => navigate(`/movies?page=${Number(page)-1}`)} disabled={page<=1}>prev</button>*/}
            {/*    <button onClick={() => navigate(`/movies?page=${Number(page)+1}`)}>next</button>*/}
            {/*</div>*/}
        </div>
    );
};

export {Movies};