import React from 'react';
import ReactDom from 'react-dom';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            logoImg:"../../../../assets/logo.jpg",
        };
       
    }

    componentDidMount(){
        console.log(process.env.CINOID_LOGO_IMAGE_PATH)
    }

  render() {
    return (
        <div>
        <div className="main_content over_hidden">
            <div className="sm_banner front_banner flex_box flex_v_end">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <img src="../../../assets/banner_img_1.png" className="img-fluid"/>
                        </div>
                        <div className="col-md-6 flex_box flex_v_top">
                            <div className=" w-100">
                                <h4 className="white f_w_light m_center max_w_400 text-center mb-5">
                                    Get Market Research, Business Risk & Industry Analysis Report
                                </h4>
                                <div className="flex_box">
                                    <div className="dropdown">
                                        <button type="button" className="btn btn-light dropdown-toggle custom_drop" data-toggle="dropdown">
                                        All Items 	<span>&or;</span>
                                        </button>
                                        <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Link 1</a>
                                        <a className="dropdown-item" href="#">Link 2</a>
                                        <a className="dropdown-item" href="#">Link 3</a>
                                        </div>
                                    </div>
                                    <input name="Search" type="text" placeholder="Search Report" className="search_input"/>
                                    <button type="button" className="btn btn-primary btn_orange">Search</button>
                                </div>
                                <ul className="text-center p-0 m-0 white f_w_light mt-3">
                                    <li className="custom_checkbox">
                                        <input type="radio" name="region" id="btn_1" value="none"/>
                                        <span className="check_box"></span>
                                        <label htmlFor="btn_1">None</label>
                                    </li>
                                    <li className="custom_checkbox">
                                        <input type="radio" name="region" id="btn_2" value="Country"/>
                                        <span className="check_box"></span>
                                        <label htmlFor="btn_2">Country</label>
                                    </li>
                                    <li className="custom_checkbox">
                                        <input type="radio" name="region" id="btn_3" value="Continent"/>
                                        <span className="check_box"></span>
                                        <label htmlFor="btn_3">Continent</label>
                                    </li>
                                    <li className="custom_checkbox">
                                        <input type="radio" name="region" id="btn_4" value="Group"/>
                                        <span className="check_box"></span>
                                        <label htmlFor="btn_4">Group/Region</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <img src="../../../assets/banner_img_2.png" className="img-fluid"/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div className="over_hidden">
            <div className="container m_t_40 m_b_40">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h6 className=" m_t_20">ABOUT OUR HISTORY</h6>
                        <h2 className="max_w_500 m_center m_t_20">We are Startuply and we create efficient web design and branding.</h2>
                        <p className="m_t_40 max_w_750 m_center">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat. Duis aute irure dolor. In reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        <a href="#" className="green_anc"><b>READ MORE</b></a>
                    </div>
                </div>
            </div>
        </div>
        

        <div className="back_gray over_hidden">
            <div className="container m_t_60 m_b_60">
                <div className="row">
                    <div className="col-sm-12">
                        <h2><b>WHAT WE DO</b></h2>
                        <div className="wwd_slider m_t_40 row">
                            <div className="service_box mb-3">
                                <p className="blue">01</p>
                                <h4>
                                        <b>WEBSITE<br></br>
                                        DESIGN</b>
                                </h4>
                                <p className="m_t_30 m_b_30 max_300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,nisi ut aliquip ex ea </p>
                                <p>
                                    <b>Web Design<br></br>
                                    mobile app Design<br></br>
                                    Ux/ui Design</b>
                                </p>
                            </div>
                            <div className="service_box mb-3">
                                <p className="blue">02</p>
                                <h4>
                                        <b>MOBILE <br></br>
                                            APPS</b>
                                </h4>
                                <p className="m_t_30 m_b_30 max_300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,nisi ut aliquip ex ea </p>
                                <p>
                                    <b>Web Design<br></br>
                                    mobile app Design<br></br>
                                    Ux/ui Design</b>
                                </p>
                            </div>
                            <div className="service_box mb-3">
                                <p className="blue">03</p>
                                <h4>
                                        <b>E-COMMERCE <br></br>
                                                SOLUTION</b>
                                </h4>
                                <p className="m_t_30 m_b_30 max_300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,nisi ut aliquip ex ea </p>
                                <p>
                                    <b>Web Design<br></br>
                                    mobile app Design<br></br>
                                    Ux/ui Design</b>
                                </p>
                            </div>
                            <div className="service_box mb-3">
                                <p className="blue">04</p>
                                <h4>
                                        <b>SEO <br></br>
                                                OPTIMIZATION</b>
                                </h4>
                                <p className="m_t_30 m_b_30 max_300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,nisi ut aliquip ex ea </p>
                                <p>
                                    <b>Web Design<br></br>
                                    mobile app Design<br></br>
                                    Ux/ui Design</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div className="over_hidden">
            <div className="container m_t_60 m_b_60">
                <div className="row">
                    <div className="col-sm-12">
                        <h2><b>Latest Reports</b></h2>
                        <div className="row mt-4">
                            <div className="col-md-3 mb-4">
                                <div className="Report_block h-100 p-3">
                                    <h4 className="f_w_600"><i>Reports<br></br> Name</i></h4>
                                    <div className="bordered_line mt-5 mb-3"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                    <div className="text-center mt-4">
                                        <a href="#" className="btn btn-light f_w_600 pl-4 pr-4"><i>View More</i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="Report_block h-100 p-3 dark_block white">
                                    <h4 className="f_w_600"><i>Reports<br></br> Name</i></h4>
                                    <div className="bordered_line mt-5 mb-3"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                    <div className="text-center mt-4">
                                        <a href="#" className="btn btn-light f_w_600 pl-4 pr-4"><i>View More</i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="Report_block h-100 p-3">
                                    <h4 className="f_w_600"><i>Reports<br></br> Name</i></h4>
                                    <div className="bordered_line mt-5 mb-3"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                    <div className="text-center mt-4">
                                        <a href="#" className="btn btn-light f_w_600 pl-4 pr-4"><i>View More</i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="Report_block h-100 p-3 dark_block white">
                                    <h4 className="f_w_600"><i>Reports<br></br> Name</i></h4>
                                    <div className="bordered_line mt-5 mb-3"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                    <div className="text-center mt-4">
                                        <a href="#" className="btn btn-light f_w_600 pl-4 pr-4"><i>View More</i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row"></div>
        

        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 flex_box flex_v_center min_h_420 team_work_back text-center">
                    <div className="max_w_750 m_center w-100">
                        <h2 className="white l_s_1p f_w_light mb-5"><b className="orange f_w_700">QUESTIONS?</b> WE CAN HELP</h2>
                        <div className="row">
                            <div className="col-sm-4">
                                <h2 className="white l_s_1p big_text_2 f_w_700">39,269</h2>
                                <h4 className="white f_w_light">TOTAL REPORTS</h4>
                            </div>
                            <div className="col-sm-4">
                                <h2 className="white l_s_1p big_text_2 f_w_700">99.8%</h2>
                                <h4 className="white f_w_light">USER RATINGS</h4>
                            </div>
                            <div className="col-sm-4">
                                <h2 className="white l_s_1p big_text_2 f_w_700">2.124.269</h2>
                                <h4 className="white f_w_light">TOTAL USERS</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="over_hidden">
            <div className="container m_t_60 m_b_60">
                <div className="row p_b_40">
                    <div className="col-sm-12">
                        <div className="testimonial_slider">
                            <div className="test_slide max_w_500 m_center block text-center">
                                <img src="../../../assets/inverted-quotes.png" className="m_center mb-5 max_w_40"/>
                                <h2 className="f_w_700 mb-5">This guys are awesome !</h2>
                                <p>
                                    “My experience with Arda Real Estate Consulting has enabled me to better assess current market risk level at any point in the home building cycle. Also, I have been able to make new valuable contacts.”
                                    <br></br><br></br>
                                    <div className="flex_box flex_v_center flex_h_center">
                                        <img src="../../../assets/testimonial.jpg" className="user_img"/>
                                        <div>
                                            <span>Benrns Sturaro</span><br></br>
                                            <span>Photographer</span>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            <div className="test_slide max_w_500 m_center block text-center">
                                <img src="../../../assets/inverted-quotes.png" className="m_center mb-5 max_w_40"/>
                                <h2 className="f_w_700 mb-5">This guys are awesome !</h2>
                                <p>
                                    “My experience with Arda Real Estate Consulting has enabled me to better assess current market risk level at any point in the home building cycle. Also, I have been able to make new valuable contacts.”
                                    <br></br><br></br>
                                    <div className="flex_box flex_v_center flex_h_center">
                                        <img src="../../../assets/testimonial.jpg" className="user_img"/>
                                        <div>
                                            <span>Benrns Sturaro</span><br></br>
                                            <span>Photographer</span>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="back_dark over_hidden">
            <div className="container m_t_60 m_b_60 text-center">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="white f_w_600 l_s_1p">Newsletter</h2>
                        <h6 className="white f_w_600 l_s_1p">KEEP UP TO DATE ON ALL THE LATEST REPORTS</h6>
                        <div className="flex_box w-100 max_w_500 m_center mt-5">
                            <input name="Search" type="text" placeholder="Email" className="search_input"/>
                            <button type="button" className="btn btn-primary btn_blue br-0">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr className="dark_hr"/>
        <div className="back_dark over_hidden">
            <div className="container m_t_60 m_b_60">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="white f_w_600 l_s_1p">Latest Blog</h2>
                        <div className="row mt-5 white">
                            <div className="col-md-4 blog_master mb-4">
                                <img src="../../../assets/blog_1.jpg"/>
                                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                <div className="border_line dark_line mb-3"></div>
                                <p>January 01, 2018 <a href="#" className="float-right white">Read More</a></p>
                            </div>
                            <div className="col-md-4 blog_master mb-4">
                                <img src="../../../assets/blog_2.jpg"/>
                                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                <div className="border_line dark_line mb-3"></div>
                                <p>January 01, 2018 <a href="#" className="float-right white">Read More</a></p>
                            </div>
                            <div className="col-md-4 blog_master mb-4">
                                <img src="../../../assets/blog_3.jpg"/>
                                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                <div className="border_line dark_line mb-3"></div>
                                <p>January 01, 2018 <a href="#" className="float-right white">Read More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container m_b_30 m_t_40">
            <div className="row">
                <div className="col-md-6">
                    <h3 className="line_head">
                        <span>CONTACT INFO</span>
                    </h3>
                    <ul className="custom_list">
                        <li className="flex_box flex_v_top m_b_20">
                            <img src="../../../assets/shape-1.jpg"/>
                            <p>
                                <b>VISIT US</b><br></br>
                                <span className="gray">20, 2 Elizabeth ST, Melbourne, Victoria 3000</span>
                            </p>
                        </li>
                        <li className="flex_box flex_v_top m_b_20">
                            <img src="../../../assets/shape-2.jpg"/>
                            <p>
                                <b>MAIL US</b><br></br>
                                <span className="gray">support@yourmail.com</span>
                            </p>
                        </li>
                        <li className="flex_box flex_v_top m_b_20">
                            <img src="../../../assets/shape-3.jpg"/>
                            <p>
                                <b>CALL US</b><br></br>
                                <span className="gray">+(100) 123 4567 890</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 custom_form">
                    <h3 className="line_head">
                        <span>LEAVE MESSAGE</span>
                    </h3>
                    <div className="row">
                        <div className="col-md-6 m_b_15">
                            <input type="text" placeholder="First Name"/>
                        </div>
                        <div className="col-md-6 m_b_15">
                            <input type="text" placeholder="Last Name"/>
                        </div>
                        <div className="col-md-6 m_b_15">
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className="col-md-6 m_b_15">
                            <input type="text" placeholder="Subject"/>
                        </div>
                        <div className="col-md-12 m_b_15">
                            <textarea placeholder="Your Message" rows="5"></textarea>
                        </div>
                        <div className="col-md-12 m_b_15">
                            <button type="submit">SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}


export default Home;