import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { changeSearchTerm } from "../../store/slices/postSlice";

import styles from './SearchBar.module.scss'

function SearchBar({onSubmit}) {

    const dispatch = useDispatch();

    const searchTerm = useSelector((state)=> {
        return state.posts.searchTerm;
    });

    useEffect(() =>{
        onSubmit(searchTerm);
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchTerm);
    }

    const handleSearchTermChange = (e) => {
        dispatch(changeSearchTerm(e.target.value));
    }

    return(
        <div className={styles.searchBar}>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <label className={styles.label}>Enter search term to look for posts:</label>
                <input placeholder="Enter whatever...." value={searchTerm} onChange={handleSearchTermChange}/>
            </form>
        </div>
    );
}

export default SearchBar;