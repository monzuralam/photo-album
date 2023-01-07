import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <>
                <header className='header'>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3">
                                <div className="logo text-start">
                                    <Link to="/">
                                        <span>Photo Album.</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <nav className="menu text-end">
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>

                                <Outlet />
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Header;