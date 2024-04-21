import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

import {addFavoriteMovie, deleteFavoriteMovie} from "../../redux";

import css from './card.module.css';

const MovieOneCard = ({movie}) => {
    
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {favoriteMovies} = useSelector(state => state.movies);

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(()=>{
        setIsFavorite(favoriteMovies.some(favoriteMovies=>favoriteMovies.id === movie.id))
    },[favoriteMovies, movie.id])

    const { original_title,poster_path} = movie;

    const img_url = `https://image.tmdb.org/t/p/w500${poster_path}`

    const handleToggleFavorite = ()=> {
        if (isFavorite){
            dispatch(deleteFavoriteMovie(movie))
        }else {
            dispatch(addFavoriteMovie(movie))
        }
        setIsFavorite(prevState => !prevState)
    }

    return (
        <div className={css.card}>
            <img src={img_url} alt={'poster'} onClick={()=> navigate(`/movies/${movie.id}`, {state: {...movie}})}/>
            <div className={css.name}>{original_title}</div>
            <div className={css.favoriteBtn} onClick={handleToggleFavorite}>
                {isFavorite ? <MdFavorite size={30}/> : <MdFavoriteBorder size={30}/>}
            </div>
        </div>
    );
};

export {MovieOneCard};