import React from 'react';
import {useSelector} from "react-redux";

import {MovieOneCard} from "../MovieOneCard/MovieOneCard";
import {NoFavoritePage} from "../../pages";

import css from './favorite.module.css';

const Favorite = () => {

    const {favoriteMovies} = useSelector(state => state.movies);

    return (
        <div className={css.list_card}>
            {favoriteMovies.length !== 0 ? favoriteMovies.map(movie=><MovieOneCard key={movie.id} movie={movie} />) : <NoFavoritePage/>}
        </div>
    );
};

export {Favorite};