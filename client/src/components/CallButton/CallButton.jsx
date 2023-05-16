import { useEffect, useState, useMemo } from "react";
import Button from "../Button";
import styles from './CallButton.module.scss';

function CallButton() {

    const [scrollY, setScrollY] = useState(0);
    const [isMiddle, setIsMiddle] = useState(false);

    useEffect(()=> {
        function handleScroll() {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    const middleOfPage = useMemo(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        return (documentHeight - windowHeight)/2 ; 
    }, []);

    useEffect(()=> {
        setIsMiddle(scrollY > middleOfPage);
    },[scrollY, middleOfPage]);

    return(
        <div>
            {isMiddle && <Button success className={styles.callButton}>Call Now</Button>
            }
        </div>
    );
}

export default CallButton;