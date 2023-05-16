import Button from "../Button";
import Modal from "../Modal";
import { useState } from "react";
import styles from './Post.module.scss';

import {NavLink} from 'react-router-dom';


function PostItem({image}) {

    const [showModal, setShowModal] = useState(false);


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


    return(
        <div className={styles.postItem}>
            <img style={{borderRadius:'5px', overflow:'hidden'}} src={image.urls.small} alt="img"/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button onClick={handleClick} secondary>Preview</Button>
                <NavLink to={`/posts/${image.id}`}>
                    <Button primary>Full Info</Button>
                </NavLink>
            </div>
            {showModal && modal}
        </div>
    );
}

export default PostItem;