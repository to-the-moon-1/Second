import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return <div className={classes.main}>
        <div className={classes.mainPhoto}>
            <img className={classes.mainImg} src={props.profile.photos.large} />
        </div>
        <div className={classes.mainContent}>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
    </div>
}

export default ProfileInfo;