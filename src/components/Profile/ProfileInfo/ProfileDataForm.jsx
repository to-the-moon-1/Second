import React from "react";
import classes from "./ProfileInfo.module.css";
import {Contact} from "./ProfileInfo";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControl";
import handleSubmit from "redux-form/lib/handleSubmit";

const ProfileDataForm = ({handleSubmit, profile, error, onSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>About me:
            <Field component={Textarea} name={'aboutMe'} placeholder={'About me'} />
        </div>
        <div>Looking for a job:
            <Field component={Input} type={'checkbox'} name={'lookingForAJob'} placeholder={''} />
        </div>
        <div>My professional skills:
            <Field component={Textarea} name={'lookingForAJobDescription'} placeholder={'Professional skills'} />
        </div>
        <div className={classes.contacts}>Contacts: {Object.keys(profile.contacts).map(key => {
            return <li key={key} className={classes.contactItem}>{key}: <Field component={Input} name={'contacts.' + key} placeholder={key} /></li>
        })}</div>
        {error && <div className={classes.formSummaryError}>
            {error}
        </div>}
        <div><button className={classes.wrapNewPhoto}>Save</button></div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;