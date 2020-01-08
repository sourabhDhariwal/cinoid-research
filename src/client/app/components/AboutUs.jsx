import React from 'react';
// import ReactDom from 'react-dom';

class AboutUs extends React.Component {
    // constructor() {
    //     super();
    //     // this.state = {
    //     //     logoImg:"../../../../assets/logo.jpg",
    //     // };
       
    // }

  render() {
    return (
        <div>
                <div class="sm_banner_about ">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                            <div class="elementor-widget-container">
					                <div class="elementor-text-editor elementor-clearfix">
                                        <p>“The way <b>research</b> <br/>and <b>relationships</b> <br/>are meant to be”</p>
                                    </div>
				                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="over_hidden">
                    <div className="container m_t_40 m_b_40">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <h4 class="m_t_20"> The way research and relationships are meant to be</h4>
                                <h2 className="max_w_500 m_center m_t_20">We are one of World’s leading market
research services provider.</h2>
                                <p className="m_t_40 max_w_750 m_center">
                                CINOID is a worlds largest platform of market research reports from leading publishers across the globe. Our platform is diverse, spanning virtually every industrial sector and even more every category and sub category within the industry. Publishers and their market research reports are meticulously validated by our in- house industry experts, prior to feature on our website.</p>
                                {/* <a href="#" className="green_anc"><b>READ MORE</b></a> */}
                            </div>

                            
                        </div>
                    </div>
                </div>
      </div>   
    );
  }
}


export default AboutUs;