import React from 'react';

import headerImg from '../../assets/rest.jpg';
import styles from './Header.module.css';
import CartButton from './CartButton';

const Header = (props) => {
    return (
        <React.Fragment>

        <header className={styles.header}>
        <h1>Generic Name</h1>
        <CartButton />
        </header>
        
        <div className={styles['main-image']}>
            <img src={headerImg} alt='View of a restaurant.'/>
        </div>
        </React.Fragment>
    );
}

export default Header;