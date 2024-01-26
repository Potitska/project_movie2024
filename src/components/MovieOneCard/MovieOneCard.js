import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './card.module.css';

const MovieOneCard = ({movie}) => {
    
    const navigate = useNavigate();

    const { original_title,poster_path} = movie;

    const img_url = `https://image.tmdb.org/t/p/w500${poster_path}`
    return (
        <div className={css.card}>
            <img src={img_url} alt={'poster'} onClick={()=> navigate(`/movies/${movie.id}`, {state: {...movie}})}/>
            <div className={css.name}>{original_title}</div>
        </div>
    );
};

export {MovieOneCard};