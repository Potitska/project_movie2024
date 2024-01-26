import React from 'react';
import {Outlet} from "react-router-dom";

import {Genres} from "../components";

const GenresPage = () => {
    return (
        <div>
            <Outlet/>
            <Genres/>
        </div>
    );
};

export {GenresPage};