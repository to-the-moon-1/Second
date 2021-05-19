import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return <div className={classes.content}>
        {/*<div>*/}
        {/*    <img src='https://www.bancaintesa.ru/upload/uf/64d/64d1662ace40218c9802b7e1ee3ea45b.jpg' />*/}
        {/*</div>*/}
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
        </div>
        <div className={classes.posts}>
            <div className={classes.item}>Post 1</div>
            <div className={classes.item}>Post 2</div>
        </div>
    </div>
}

export default Profile;