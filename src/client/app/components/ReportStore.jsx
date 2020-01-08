import React from 'react';
// import ReactDom from 'react-dom';

class ReportStore extends React.Component {
    // constructor() {
    //     super();
    //     // this.state = {
    //     //     logoImg:"../../../../assets/logo.jpg",
    //     // };
       
    // }

  render() {
    return (
        <div>
            <div class="main_content">
                <div class="sm_banner">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-8 flex_box">
                                  <input name="Search" type="text" placeholder="Search Report" class="search_input"/>
                                  <button type="button" class="btn btn-primary btn_blue">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container m_t_40 m_b_40">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="dropdown sidebar_drop">
                            <button type="button" class="btn  dropdown-toggle btn-lg col-12 text-left outline_none" data-toggle="dropdown">
                            <b>PRODUCT CATEGORIES</b>
                            </button>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Automotive</a>
                            <a class="dropdown-item" href="#">Technology</a>
                            <a class="dropdown-item" href="#">Banking</a>
                            </div>
                        </div>
                        <div class="dropdown sidebar_drop">
                            <button type="button" class="btn  dropdown-toggle btn-lg col-12 text-left outline_none" data-toggle="dropdown">
                            <b>PRICE</b>
                            </button>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Link 1</a>
                            <a class="dropdown-item" href="#">Link 2</a>
                            <a class="dropdown-item" href="#">Link 3</a>
                            </div>
                        </div>
                        <div class="dropdown sidebar_drop">
                            <button type="button" class="btn  dropdown-toggle btn-lg col-12 text-left outline_none" data-toggle="dropdown">
                            <b>PUBLISHED DATE</b>
                            </button>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Link 1</a>
                            <a class="dropdown-item" href="#">Link 2</a>
                            <a class="dropdown-item" href="#">Link 3</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-9">
                        <div class="row filter_head m_b_20">
                            <div class="col-md-6">
                                <ul>
                                    <li>
                                        <i class="fa fa-th" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <i class="fa fa-list" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <label class="m_r_10">Sort By : </label>
                                        <select name="sort" class="sort_select">
                                            <option value="price">
                                                Price
                                            </option>
                                            <option value="Popularity">
                                                Popularity
                                            </option>
                                            <option value="Product">
                                                Product
                                            </option>
                                        </select>
                                    </li>
                                    <li>
                                        <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6 text-right">
                                <ul>
                                    <li>
                                        <label class="m_r_10">Show : </label>
                                        <select name="sort" class="sort_select m_r_10">
                                            <option value="10">
                                                10
                                            </option>
                                            <option value="20">
                                                20
                                            </option>
                                            <option value="30">
                                                30
                                            </option>
                                        </select>
                                        Per Page
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row text-center product_row">
                            <div class="col-md-4 m_b_15">
                                <div class="product_box">
                                    <img class="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i class="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-4 m_b_15">
                                <div class="product_box">
                                    <img class="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i class="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-4 m_b_15">
                                <div class="product_box">
                                    <img class="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i class="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row text-center product_row">
                            <div class="col-md-4 m_b_15">
                                <div class="product_box">
                                    <img class="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i class="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-4 m_b_15">
                                <div class="product_box">
                                    <img class="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i class="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-4 m_b_15">
                                <div class="product_box">
                                    <img class="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i class="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row text-center product_row">
                            <div class="col-md-4 m_b_15">
                                <div class="product_box">
                                    <img class="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i class="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-4 m_b_15">
                                <div class="product_box">
                                    <img class="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i class="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-4 m_b_15">
                                <div class="product_box">
                                    <img class="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i class="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row filter_head">
                            <div class="col-md-6">
                                <ul>
                                    <li>
                                        <label class="m_r_10">Items 1 to 12 of 149 total</label>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6 text-right">
                                <ul>
                                    <li>
                                        <label class="m_r_10">Page : </label>
                                    </li>
                                    <li>
                                        <label>1</label>
                                    </li>
                                    <li>
                                        <i>2</i>
                                    </li>
                                    <li>
                                        <i>3</i>
                                    </li>
                                    <li>
                                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
      </div>
    );
  }
}


export default ReportStore;