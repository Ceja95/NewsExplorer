import '../../blocks/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">© 2024 Supersite, Powered by News API</p>

            <button className="footer__links" type="button">
                <a href="#home" id="home-icon" className="footer__link">Home</a>
                <a href="#tripleten" id="tripleten-icon" className="footer__link">TripleTen</a>
                <a href="#github" id="github-icon" className="footer__link">
                    <img src="../../images/github.png" className="footer__icon" alt="github-icon" />
                </a>
                <a href="#linkedin" id="linkedin-icon" className="footer__link">
                    <img src="../../images/Union.png" className="footer__icon" alt="linkedin-icon" />
                </a>
            </button>
        </footer>
    );
}

export default Footer;