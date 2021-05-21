import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from './../Profile/ProfileInfo/ProfileInfo.module.css';

const Profile = (props) => {

    return <div className={classes.main}>
        <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto} saveProfile={props.saveProfile} />
        <MyPostsContainer />
    </div>
}

export default Profile;