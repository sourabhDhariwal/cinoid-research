import React from 'react';
// import ReactDom from 'react-dom';

class ContactUs extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     logoImg:"../../../../assets/logo.jpg",
        // };
       
    }

  render() {
    return (
        <div>

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


export default ContactUs;