import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-3 col-12">
                                <div className="widget text-start">
                                    <div className="widget-wrapper">
                                        <div className="logo mb-2">
                                            <Link to="/">
                                                <span>Photo Album</span>
                                            </Link>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non esse iusto consequuntur eaque error aspernatur doloremque soluta ipsam. Neque </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-3 col-12">
                                <div className="widget text-start">
                                    <div className="widget-wrapper">
                                        <h3 className="widget-title">Useful Links</h3>
                                        <div className="widget-content">
                                            <ul>
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="">Disclaimer</Link></li>
                                                <li><Link to="">Faq</Link></li>
                                                <li><Link to="">Privacy Policy</Link></li>
                                                <li><Link to="/contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-3 col-12">
                                <div className="widget text-start">
                                    <div className="widget-wrapper">
                                        <h3 className="widget-title">Categories</h3>
                                        <div className="widget-content">
                                            <ul>
                                                <li><Link to="">Community</Link></li>
                                                <li><Link to="">Jobs</Link></li>
                                                <li><Link to="">Vehicles</Link></li>
                                                <li><Link to="">Flower</Link></li>
                                                <li><Link to="">Mountain</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-3 col-12">
                                <div className="widget text-start">
                                    <div className="widget-wrapper">
                                        <h3 className="widget-title">Latest Post</h3>
                                        <div className="widget-content">
                                            <ul>
                                                <li><Link to="">How to learn photography easy way</Link></li>
                                                <li><Link to="">Photography tips and tricks: 101</Link></li>
                                                <li><Link to="">Basic photography concepts for Beginner</Link></li>
                                                <li><Link to="">Photography environment setup tips</Link></li>
                                                <li><Link to="">How to become a pro photographar</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="copyright text-center pt-5">
                                    <p>&copy; 2023 Photo Album - Made with ❤ in Bangladesh. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
export default Footer;
