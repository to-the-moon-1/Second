import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                        src={dialog.src}/>);

    let messagesElements = state.messages.map(message => <Message message={message.message}/>)

    let newMessageBody = state.newMessageBody;

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>

            {dialogsElements}

        </div>
        <div className={classes.messages}>

            <div>{messagesElements}</div>

            <div>
                <div><textarea value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
                <div><button onClick={onSendMessageClick}>Send message</button></div>
            </div>

        </div>
    </div>
}

export default Dialogs;




