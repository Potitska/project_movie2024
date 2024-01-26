import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MovieById} from "../MovieById/MovieById";
import {NotFoundPage} from "../../pages";

const MovieByName = () => {
    const location = useLocation();
    const name = new useSearchParams(location.search).get('name')
    
    const {movieByName} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(moviesActions.movieByName(name))
    },[dispatch, name ])

    if (movieByName.length !== 0){
        return (
            <div>
                {movieByName.map(movie=><MovieById key={movie.id} movie={movie}/>)}
            </div>
        )
    }else if (movieByName.length === 0){
        return (
            <div>
                <NotFoundPage/>
            </div>
        )
    }
};

export {MovieByName};