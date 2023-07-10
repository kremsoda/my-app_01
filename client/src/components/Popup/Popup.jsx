import Button from "../Button";
import styles from './Popup.module.scss'

function Popup({children, popup, setPopup}) {
    return popup ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>
                <div className={styles.popupContent}>
                    {children}
                </div>
                <Button success rounded onClick={() => setPopup(!popup)}>Ok</Button>
            </div>
        </div>
    ) : null;
}

export default Popup;