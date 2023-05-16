import ReactDOM  from "react-dom";
import { useEffect } from "react";
import styles from './Modal.module.scss'

function Modal({onClose, children, actionBar}) {

    useEffect(()=>{
        document.body.classList.add(styles.overflowHidden);

        return () => {
            document.body.classList.remove(styles.overflowHidden);
        }
    },[]);

    return ReactDOM.createPortal (
        <div>
            <div onClick={onClose} style={{position: 'fixed', inset: '0px', backgroundColor: 'rgb(209 213 219)', opacity: '.8'}}></div>
            <div style={{position: 'fixed', inset: '50px 50px auto 50px', padding: '50px', background: '#fff'}}>
                <div style={{display: 'flex', flexDirection:'column', height: '100%', }}>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        {actionBar}
                    </div>
                    {children}
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );
}

export default Modal;