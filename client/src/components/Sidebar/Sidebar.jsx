import { v4 as uuidv4 } from "uuid";

import { NavList, NavItem } from "../Nav";

import styles from './Sidebar.module.scss'

function Sidebar() {
    const navItems = [
        {
            name: 'Dashboard',
            link: '/dashboard'
        },
        {
            name: 'Profile',
            link: '/dashboard/profile'
        },
        {
            name: 'Post',
            link: '/dashboard/post'
        },
    ];

    return (
        <div className={styles.sidebar}>
            <NavList style={{ display: 'flex', flexDirection: 'column'}}>
                {navItems.map((item) => (
                <NavItem link={item.link} key={uuidv4()}>{item.name}</NavItem>
            ))}
            </NavList>
        </div>
    );
}

export default Sidebar;