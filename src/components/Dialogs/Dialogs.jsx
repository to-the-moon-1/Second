import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}
                                                                        src={dialog.src}/>);

    let messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}/>)

    let newMessageBody = state.newMessageBody;

    if (!props.isAuth) return <Redirect to={'/login'} />

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>

            {dialogsElements}

        </div>
        <div className={classes.messages}>

            <div>{messagesElements}</div>

            <AddMessageFormRedux onSubmit={addNewMessage} />

        </div>
    </div>
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} name={'newMessageBody'} placeholder={'Enter your message'} validate={[required, maxLength50]} /></div>
            <div><button>Send message</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);

export default Dialogs;




