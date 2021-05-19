import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <div className='app-wrapper'>
            <img src='https://www.smeg.com/binaries/content/gallery/logo/logo_bianco_no-back.png' />
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div className={classes.item}>{props.login}  | <button className={classes.btnLogout} onClick={props.logout}>Log out</button></div>
                    : <NavLink className={classes.item} to={'/login'}>Login</NavLink>
                }

            </div>
        </div>
    </header>
}

export default Header;