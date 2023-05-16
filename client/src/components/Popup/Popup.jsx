import Button from "../Button";
import styles from './Popup.module.scss'

function Popup({children, popup, setPopup}) {
    return popup ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>
                <Button danger rounded onClick={() => setPopup(!popup)}>X</Button>
                <div className={styles.popupContent}>
                    {children}
                </div>
            </div>
        </div>
    ) : null;
}

export default Popup;