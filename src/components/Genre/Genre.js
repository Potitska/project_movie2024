import React from 'react';
import {Link} from "react-router-dom";

import css from "./Genre.module.css";

const Genre = ({genre}) => {

    const {id, name} = genre;

    return (
            <Link className={css.linkList} to={`${id}`}>{name}</Link>
    );
};

export {Genre};