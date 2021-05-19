import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <div className='app-wrapper'>
            <img src='https://www.smeg.com/binaries/content/gallery/logo/logo_bianco_no-back.png' />
        </div>
    </header>
}

export default Header;