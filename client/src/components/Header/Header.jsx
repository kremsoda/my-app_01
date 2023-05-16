import { v4 as uuidv4 } from "uuid";

import Button from "../Button";
import {NavList, NavItem} from "../Nav";
import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux';

import { changeTheme } from "../../store/slices/themeSlice";
import { useEffect } from "react";
import { logOut } from "../../store/slices/userSlice";

function Header() {

    const dispatch = useDispatch();
    
    const theme = useSelector((state) => {
        return state.theme.theme;
    });

    const user = useSelector((state) => {
        return state.user.user;
    });

    const handleTheme = () => {
        if(theme == 'night') {
            dispatch(changeTheme('day'))
        } else {
            dispatch(changeTheme('night'));
        }
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.classList.remove('day', 'night');
        body.classList.add(theme);
    },[theme]);

    const navItems = [
        {
            name: 'Home',
            link: '/'},
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
        {
            name: 'Posts',
            link: '/posts'
        },
        {
            name: '404',
            link: '/*'
        }
    ];

    return (
        <header className={styles.header}>
            <NavList>
                {navItems.map((item) => (
                    <NavItem link={item.link} key={uuidv4()}>{item.name}</NavItem>
                ))}
            </NavList> 
            <Button onClick={handleTheme} secondary rounded outline>{`${theme === 'day' ? 'Day': 'Night'}`} Theme</Button>
            <div className="flex justify-between">
                {(user !== false ? 
                    <NavLink to={'/dashboard'} className={({isActive}) => isActive ? styles.active : null}>
                        <Button primary outline rounded>Dashboard</Button>
                    </NavLink>
                    :
                    null
                )}
                {(user !== false ? 
                    <Button className='mx-3' danger onClick={()=>dispatch(logOut(false))}>Log Out</Button>
                    :
                    <NavLink to={'/login'}>
                        <Button primary >Log In</Button>
                    </NavLink>
                )}
            </div>
        </header>
    );
}

export default Header;

