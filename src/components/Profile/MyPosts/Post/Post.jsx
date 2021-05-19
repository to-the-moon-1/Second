import React from 'react';
import classes from './MyPosts.module.css'

const MyPosts = () => {
    return <div>
                My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>Post 1</div>
                <div className={classes.item}>Post 2</div>
            </div>
        </div>
}

export default MyPosts;