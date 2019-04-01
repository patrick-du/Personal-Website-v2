import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <React.Fragment>
            <nav className="navbar sticky-top navbar-expand-md navbar-light bg-white py-1 p-font med container-padding" id="desktop">
                <Link to="/">
                    <div className="navbar-brand bold pt-3 text-left"><p>Patrick.</p></div>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to="/about" className="linkdec">
                                <div className="nav-link hvr-pop s-font">About</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="linkdec">
                                <div className="nav-link hvr-pop s-font">Projects</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/photography" className="linkdec">
                                <div className="nav-link hvr-pop s-font">Photography</div>
                            </Link>
                        </li>
                    </ul>


                </div>
                <Link to="/"><button type="button" className="btn nav-btn float-right s-font med">Resume</button></Link>
            </nav>
        </React.Fragment>
    );
};

export default Nav;
