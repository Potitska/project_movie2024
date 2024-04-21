import React from 'react';
import {useLocation} from "react-router-dom";

import css from './oneMovie.module.css';


const MovieById = () => {

    const {state} = useLocation();

    const {original_language, original_title, overview, popularity, vote_average, poster_path, release_date} = state
    const img_url = `https://image.tmdb.org/t/p/w500${poster_path}`

    return (
        <div className={css.card}>
            <img src={img_url} alt={original_title}/>
            <div>Language: {original_language}</div>
            <div>Release_date: {release_date}</div>
            <div>Name: {original_title}</div>
            <div>Overview: {overview}</div>
            <div>Popularity: {popularity}</div>
            <div>Rating: {vote_average}</div>
        </div>
    );
};


export {MovieById};