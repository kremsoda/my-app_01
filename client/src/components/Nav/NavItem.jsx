import {NavLink} from 'react-router-dom';
import styles from './Nav.module.scss';


function NavItem({children, link}) {
    return(
        <NavLink style={{padding:'10px'}} to={link} className={({isActive}) => isActive ? styles.active : null} >
            {children}
        </NavLink>
    );
}

export default NavItem;


