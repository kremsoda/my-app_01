import styles from './Nav.module.scss';

function NavList({children}) {
    return(
        <nav className={styles.navStyle}>
            {children}
        </nav>
    );
}

export default NavList;