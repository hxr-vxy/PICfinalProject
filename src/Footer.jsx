import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>The Eskaya People</h2>

                    <p>
                        An educational website about the Eskaya indigenous
                        cultural community of Bohol, Philippines.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Navigate</h3>

                    <nav className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/community">Community</Link>
                        <Link to="/history">History</Link>
                        <Link to="/language">Language</Link>
                        <Link to="/today">Today</Link>
                        <Link to="/digital">Digital</Link>
                        <Link to="/creators">Creators</Link>
                    </nav>
                </div>

                <div className="footer-section footer-about">
                    <h3>About This Site</h3>

                    <p>
                        This website presents the Eskaya as a living,
                        dynamic community. Information is based on academic
                        publications, government records, and cultural
                        institution sources only.
                    </p>

                    <p>
                        No fabricated interviews, statistics, or sources
                        are included. Restricted, sacred, or private
                        cultural information is intentionally omitted.
                    </p>
                </div>

                <div>
                    <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>^</button>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
