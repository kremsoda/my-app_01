import Button from "../Button";
import styles from "./Hero.module.scss";


function Hero({ children, src, CTA }) {
 return (
    <section className={styles.heroSection}>
        <img src={src} alt="image description" />
        <div className={styles.heroDiv}>
            <div className={styles.hero}>
                <div>
                    <h1>{children}</h1>
                </div>
                <Button primary>{CTA}</Button>
            </div>
        </div>
    </section>
 );
}


export default Hero;