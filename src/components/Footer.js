import React, { Component } from 'react'

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
                                            <a href="/">
                                                <span>Photo Album</span>
                                            </a>
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
                                                <li><a href="/">Home</a></li>
                                                <li><a href="#">Disclaimer</a></li>
                                                <li><a href="#">Faq</a></li>
                                                <li><a href="#">Privacy Policy</a></li>
                                                <li><a href="#">Contact</a></li>
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
                                                <li><a href="#">Community</a></li>
                                                <li><a href="#">Jobs</a></li>
                                                <li><a href="#">Vehicles</a></li>
                                                <li><a href="#">Flower</a></li>
                                                <li><a href="#">Mountain</a></li>
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
                                                <li><a href="#">How to learn photography easy way</a></li>
                                                <li><a href="#">Photography tips and tricks: 101</a></li>
                                                <li><a href="#">Basic photography concepts for Beginner</a></li>
                                                <li><a href="#">Photography environment setup tips</a></li>
                                                <li><a href="#">How to become a pro photographar</a></li>
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
