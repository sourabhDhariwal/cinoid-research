import React from 'react';

class Footer extends React.Component {
  render() {
    return (
        <div id ="footer_content">
             
        <footer className="site_footer p_t_40 p_b_40">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="../../../assets/logo_color.png"/>
                        <p className="white logo_text"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small></p>
                        <h4 className="white m_t_20 m_b_20">KEEP IN TOUCH</h4>
                        <ul className="social_list">
                            <li>
                                <a href="#">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className="white">NAVIGATION</h5>
                        <ul className="footer_list m_t_20">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Report Store</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className="white">NAVIGATION</h5>
                        <ul className="footer_list m_t_20">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Report Store</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className="white">NAVIGATION</h5>
                        <ul className="footer_list m_t_20">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Report Store</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="copyright_text">Copyright © 2019 cinoidresearch</p>
            </div>
        </footer>
     </div>
    );
  }
}


export default Footer;