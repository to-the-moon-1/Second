import React, {useEffect, useState} from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

        return <div>
            {!editMode &&
            <div className={classes.status}>
                <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input className={classes.status + ' ' + classes.input} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
}

export default ProfileStatusWithHooks;