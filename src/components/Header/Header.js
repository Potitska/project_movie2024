import {Link, NavLink} from "react-router-dom";
import {Switch} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import {themeActions} from "../../redux";
import {Search} from "../Search/Search";

import css from './Header.module.css';

const Header = () => {

    const {themeCheck} = useSelector(state => state.theme);
    const dispatch = useDispatch();

    return (
        <div className={css.Header}>
            <Link to={'/'}><div className={css.name}>Binge-Watch</div></Link>
            <NavLink className={css.moviesList} to={{ pathname: '/movies', search: '?page=1' }}>Movies</NavLink>
            <NavLink className={css.moviesList} to={'/genres'}>Genres</NavLink>
            <NavLink className={css.moviesList} to={'/favorite'}>Favorite</NavLink>
            <div className={css.search}><Search/></div>
            <Switch className={css.themeCheck} defaultChecked={themeCheck} onChange={()=>dispatch(themeActions.changeThemeCheck())}/>
        </div>

    );
};

export {Header};