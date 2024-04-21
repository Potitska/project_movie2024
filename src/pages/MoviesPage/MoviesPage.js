import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Pagination} from "@mui/material";

import {Movies} from "../../components";

import css from './MoviesPage.module.css';


const MoviesPage = () => {

    const [, setQuery] = useSearchParams();
    const {total_pages} = useSelector(state => state.movies);

    return (
        <div>
            <Movies/>
            <Pagination
                className={css.Btn_pagination}
                count={total_pages}
                variant="outlined"
                shape="rounded"
                onChange={(e, page) => setQuery({page})}
            />
        </div>
    );
};

export {MoviesPage};