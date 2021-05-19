import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={classes.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Captain America'},
        {id: 2, name: 'Doctor Strange'},
        {id: 3, name: 'Black Panther'},
        {id: 4, name: 'Nick Fury'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi, friend!'},
        {id: 2, message: 'I want to give one mission to you'},
        {id: 3, message: 'Are you ready for it?'}
    ]

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = messagesData
        .map(message => <Message message={message.message} />)

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>

            {dialogsElements}

        </div>
        <div className={classes.messages}>

            {messagesElements}

        </div>
    </div>
}

export default Dialogs;




