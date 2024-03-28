import React, { useState } from 'react';

import './page404.scss';

const Page404 = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="page404">
            <div className="page404__hamburger-menu" onClick={toggleMenu}>
                <button className={`page404__burger ${menuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <nav data-state={menuOpen ? 'open' : 'closed'}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="https://github.com/ArtemMaslii">Git</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/artem-maslii-3b0b30239/">LinkedIn</a>
                    </li>
                    <li>
                        <a href="/cart">Cart</a>
                    </li>
                </ul>
            </nav>
            <main>
                <div className="page404__container">
                    <div className="page404__outer-wrap">
                        <div className="page404__inner-wrap">
                            <h1>404</h1>
                            <h2>UH OH! You're lost.</h2>
                            <p>The page you are looking for does not exist.
                                How you got here is a mystery. But you can click the button below
                                to go back to the homepage.
                            </p>
                            <a href="/">
                                <button className="page404__btn orange">HOME</button>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Page404;
