import Button from "../Button";
import Modal from "../Modal";
import { useState } from "react";
import styles from './Post.module.scss';
import { useSelector } from "react-redux";

import {NavLink} from 'react-router-dom';
import Popup from "../../components/Popup/Popup";

import { addNewPost } from "../../hooks/useFetch";


function PostItem({image}) {
    const postTags = image.tags.map((tag) => {
        return tag.title
    });

    const currentPost = {
        title: image.alt_description,
        body: image.description ? image.description : '',
        tag: postTags,
        categories: postTags,
        slug: image.slug,
        thumbnail: '',
        externalLink: image.urls.regular,
    };
    
    const [popup, setPopup ] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const user = useSelector((state) => {
        return state.user.user
    });

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (
        <div>
            <Button onClick={handleClose} danger> Close</Button>
        </div>
    );

    const modal = 
    <Modal onClose={handleClose} actionBar={actionBar}> 
        <div style={{maxHeight: '80%', margin: '15px 0px'}}>
            <img style={{borderRadius:'5px', overflow:'hidden', objectFit:'cover', maxHeight:'60vh', maxWidth:'60vh'}} src={image.urls.small} alt="img"/>
        </div>
        <p>Description: {image.alt_description}</p>
        <Button CTA={image.links.html} success>Open in full page</Button>
    </Modal>

    const handlePost = (post) => {
        // const formData = new FormData();
        // Object.entries(post).forEach(([key, value]) => {
        //     if (Array.isArray(value)) {
        //         value.forEach((item) => {
        //             formData.append(key,item)
        //         });
        //     } else {
        //         formData.append(key, value);
        //     }
        // });

        addNewPost(post);

        setPopup(!popup);
    }

    return(
        <div className={styles.postItem}>
            <img style={{borderRadius:'5px', overflow:'hidden'}} src={image.urls.small} alt="img"/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button onClick={handleClick} secondary>Preview</Button>
                <NavLink to={`/posts/${image.id}`}>
                    <Button primary>Full Info</Button>
                </NavLink>
                {(user ? <Button success onClick={() => handlePost(currentPost)}>Save to posts</Button>: null )}
            </div>
            <Popup popup={popup} setPopup={setPopup}>This post has been successfully saved to your library.</Popup>
            {showModal && modal}
        </div>
    );
}

export default PostItem;