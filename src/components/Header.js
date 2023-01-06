import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <>
                <header className='header'>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3">
                                <div className="logo text-start">
                                    <a href="/">
                                        <span>Photo Album.</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <nav className="menu text-end">
                                    <ul>
                                        <li><a href="">Home</a></li>
                                        <li><a href="">About</a></li>
                                        <li><a href="">Blog</a></li>
                                        <li><a href="">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Header;