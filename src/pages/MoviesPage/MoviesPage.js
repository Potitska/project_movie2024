import React, {useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Pagination} from "@mui/material";

import {Movies} from "../../components";
import {Search} from "../../components/Search/Search";

import css from './MoviesPage.module.css';


const MoviesPage = () => {

    const [searchText, setSearchText] = useState('');

    const [, setQuery] = useSearchParams();
    const {total_pages} = useSelector(state => state.movies);

    return (
        <div>
            <div><Search setSearchText={setSearchText} searchText={searchText}/></div>
            <Movies searchText={searchText}/>
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