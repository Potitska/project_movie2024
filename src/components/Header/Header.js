import {Link, NavLink} from "react-router-dom";
import {Switch} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import {themeActions} from "../../redux";

import css from './Header.module.css';

const Header = () => {

    const {themeCheck} = useSelector(state => state.theme);
    const dispatch = useDispatch();

    return (
        <div className={css.Header}>
            <Link to={'/'}><div className={css.name}>Binge-Watch</div></Link>
            <NavLink className={css.moviesList} to={{ pathname: '/movies', search: '?page=1' }}>Movies</NavLink>
            <NavLink className={css.moviesList} to={'/genres'}>Genres</NavLink>
            <Switch defaultChecked={themeCheck} onChange={()=>dispatch(themeActions.changeThemeCheck())}/>
        </div>

    );
};

export {Header};