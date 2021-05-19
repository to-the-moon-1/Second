import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={classes.dialog}>
        <img className={classes.dialogImg} src={props.src} />
        <NavLink to={path} activeClassName={classes.activeDialog}>
            {props.name}</NavLink>
    </div>
}

export default DialogItem;




