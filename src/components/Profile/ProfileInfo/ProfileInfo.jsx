import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        try {
            saveProfile(formData).then(() => {
                setEditMode(false);
            })
        } catch (err) {
            console.log(err);
        }
        console.log(formData)
    }

    return <div>
        <div className={classes.mainPhoto}>
            <img className={classes.mainImg} src={profile.photos.large || userPhoto} />
            {isOwner && <button className={classes.wrapNewPhoto}>New photo<input type={'file'} className={classes.newPhoto} onChange={onMainPhotoSelected} /></button>}
        </div>
        <div className={classes.mainContent}>
            <div className={classes.name}>{profile.fullName}</div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            {editMode
                ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}} />}
        </div>
    </div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        <div>About me: {profile.aboutMe ? profile.aboutMe : 'no information'}</div>
        <div>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {profile.lookingForAJob &&
        <div>My professional skills: {profile.lookingForAJobDescription} </div>}
        <div className={classes.contacts}>Contacts: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}</div>
        {isOwner && <div><button className={classes.wrapNewPhoto} onClick={goToEditMode}>Edit profile</button></div>}
    </div>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <li className={classes.contactItem}>{contactTitle}: {contactValue}</li>
}

export default ProfileInfo;