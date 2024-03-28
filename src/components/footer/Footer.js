import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = ({isLoggedIn}) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="footer">
            <button className="footer__btn" onClick={scrollToTop}>
                Back to Top
            </button>
            <nav className="footer__nav">
                <a href="/">Home</a>
                <a href="https://github.com/ArtemMaslii">Git</a>
                <a href="https://www.linkedin.com/in/artem-maslii-3b0b30239/">LinkedIn</a>
                <a href="/cart">Cart</a>
                {isLoggedIn ? (
                <Link href="/login">Log out</Link>
                ) : (
                <Link to="/login">Log in</Link>
                )}
            </nav>
            <div className="footer__author">
                <p>© 2024 Artem Maslii</p>
            </div>
            <div className="footer__lightings">
                <section className="footer__one">
                    <section className="footer__two">
                        <section className="footer__three">
                            <section className="footer__four">
                                <section className="footer__five">
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default Footer;