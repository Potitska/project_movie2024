import React from 'react';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import {Header} from "../components";

import css from './MainLayout.module.css';

const MainLayout = () => {
    const {themeCheck} = useSelector(state => state.theme);
    return (
        <div className={themeCheck?css.black:css.white}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};