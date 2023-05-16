import './Footer.style.scss';

function Footer({children, ...rest}) {

    return(
        <footer {...rest}>
            <p>{children}</p>
        </footer>
    );
}

export default Footer;