import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {Genre} from "../Genre/Genre";

import css from "./genres.module.css";


const Genres = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.movies);

    useEffect(()=>{
        dispatch(moviesActions.allGenres())
    },[dispatch])
    return (
        <div className={css.genresList}>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};