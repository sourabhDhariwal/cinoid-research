import React from 'react';
// import ReactDom from 'react-dom';
import socket from '../../../socketConnection.js'
import { Link} from 'react-router-dom'
class ReportStore extends React.Component {
    constructor() {
        super();
        this.socket =socket;
        this.state ={
            pager: {},
            pageOfItems: [],
            researchPaperList:[],
            paginationArray:{
                limit:0,
                offset:0
            },
            searchArray:{
              search_input :""
            }
        };
        this.handleSearchBtn =this.handleSearchBtn.bind(this);
        this.handleResearchPaperList =this.handleResearchPaperList.bind(this);
        

    }


    componentDidMount(){
        this.loadPage();
        this.socket.emit('getFilterData');
        this.handleResearchPaperList()
    };


    componentDidUpdate() {
        this.loadPage();
    }
    
    loadPage() {
        console.log(this.props.location.search.replace('?',"")+     + this.state.pager.currentPage)
        const params = this.props.location.search.replace('?',"")
        const page = parseInt(params) || 1;
        if (page !== this.state.pager.currentPage) {
            this.socket.emit('getResearchPaperList',{
                page:page
            });
        }
       
        // get page of items from api
        // console.log(this.props.location.search.replace('?',"")+     + this.state.pager.currentPage)
    
        // const page = parseInt(params) || 1;
        // if (page !== this.state.pager.currentPage) {
        //     console.log("page",page)
        //     fetch(`http://localhost:8018/research-paper/api/items/`+page, { method: 'GET', headers: {
        //         'Content-Type': 'application/vnd.cinoid-dashboard',
        //       }, })
        //         .then(response => response.json())
        //         .then(({pager, pageOfItems}) => {
        //             console.log(pager.pages)
        //             this.setState({ pager, pageOfItems });
        //         });
        // }
    }


    handleResearchPaperList(){
        this.socket.on('responseResearchList',(data)=>{
            if(data.status){
                console.log("sddsdsdsd",data)
                let pager =data.listView.pager;
                let pageOfItems = data.listView.pageOfItems
                this.setState({ pager, pageOfItems });        
            }else{
                let pager =data.listView.pager;
                let pageOfItems = data.listView.pageOfItems
                this.setState({ pager, pageOfItems });
            }
        })
    }

    handleSearchBtn(e){
        const {name,value}= e.target;
        if(value){
            this.state.searchArray.search_input=value

        }else{
            this.state.searchArray.search_input=value
        }
        this.state.paginationArray={
            limit:0,
            offset:0
        }
        this.socket.emit('getResearchPaperList',{
            paginationArray :this.state.paginationArray,
            searchArray:this.state.searchArray
        });
        console.log("dfffdfdf",this.state.searchArray)
    }

  render() {
      const { pager, pageOfItems } = this.state;
    return (
        <div>
            <div className="main_content">
                <div className="sm_banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 flex_box">
                                  <input name="search_input" type="text" onChange={this.handleSearchBtn} placeholder="Search Report" className="search_input"/>
                                  {/* <button type="button" className="btn btn-primary btn_blue">Search</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container m_t_40 m_b_40">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="dropdown sidebar_drop">
                            <button type="button" className="btn  dropdown-toggle btn-lg col-12 text-left outline_none" data-toggle="dropdown">
                            <b>PRODUCT CATEGORIES</b>
                            </button>
                            <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Automotive</a>
                            <a className="dropdown-item" href="#">Technology</a>
                            <a className="dropdown-item" href="#">Banking</a>
                            </div>
                        </div>
                        <div className="dropdown sidebar_drop">
                            <button type="button" className="btn  dropdown-toggle btn-lg col-12 text-left outline_none" data-toggle="dropdown">
                            <b>PRICE</b>
                            </button>
                            <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Link 1</a>
                            <a className="dropdown-item" href="#">Link 2</a>
                            <a className="dropdown-item" href="#">Link 3</a>
                            </div>
                        </div>
                        <div className="dropdown sidebar_drop">
                            <button type="button" className="btn  dropdown-toggle btn-lg col-12 text-left outline_none" data-toggle="dropdown">
                            <b>PUBLISHED DATE</b>
                            </button>
                            <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Link 1</a>
                            <a className="dropdown-item" href="#">Link 2</a>
                            <a className="dropdown-item" href="#">Link 3</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="row filter_head m_b_20">
                            {/* <div className="col-md-6">
                                <ul>
                                    <li>
                                        <i className="fa fa-th" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-list" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <label className="m_r_10">Sort By : </label>
                                        <select name="sort" className="sort_select">
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
                                        <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
                                    </li>
                                </ul>
                            </div> */}
                            {/* <div className="col-md-6 text-right">
                                <ul>
                                    <li>
                                        <label className="m_r_10">Show : </label>
                                        <select name="sort" className="sort_select m_r_10">
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
                            </div> */}
                        </div>
                        
                      {(  pageOfItems.length>0?
                         <div className="row text-center product_row">
                             {pageOfItems.map(paper =>
                         <div className="col-md-4 m_b_15">
                                <div className="product_box">
                                    <img className="product_img" src="../../../assets/report.jpg"/>
                                    <p>{paper.publication_name}</p>
                                    <h5><b>$ {(paper.price!=null?paper.price:0.00)}</b></h5>
                                    <button type="button">
                                        <i className="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                    )}
                        {/* {   this.state.researchPaperList.map((paper, index) => (
                            <div className="col-md-4 m_b_15">
                                <div className="product_box">
                                    <img className="product_img" src="../../../assets/report.jpg"/>
                                    <p>{paper.publication_name}</p>
                                    <h5><b>$ {(paper.price!=null?paper.price:0.00)}</b></h5>
                                    <button type="button">
                                        <i className="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                        ))} */}
                        </div>
                        : <div className="row text-center product_row">No Research paper found..</div>)}
                       
                           
                            {/* <div className="col-md-4 m_b_15">
                                <div className="product_box">
                                    <img className="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i className="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 m_b_15">
                                <div className="product_box">
                                    <img className="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i className="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div> */}

                        {/* <div className="row text-center product_row">
                            <div className="col-md-4 m_b_15">
                                <div className="product_box">
                                    <img className="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i className="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 m_b_15">
                                <div className="product_box">
                                    <img className="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i className="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 m_b_15">
                                <div className="product_box">
                                    <img className="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i className="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center product_row">
                            <div className="col-md-4 m_b_15">
                                <div className="product_box">
                                    <img className="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i className="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 m_b_15">
                                <div className="product_box">
                                    <img className="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i className="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 m_b_15">
                                <div className="product_box">
                                    <img className="product_img" src="../../../assets/report.jpg"/>
                                    <p>Global Aircraft De-Icing Market by Manufacturers, Regions, Type and
                                            Application, Forecast to 2025</p>
                                    <h5><b>$ 899</b></h5>
                                    <button type="button">
                                        <i className="fa fa-shopping-cart m_r_10" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div> */}
                        <div className="row filter_head">
                          <div className="col-md-6">
                                {  <ul>
                                    <li>
                                        <label className="m_r_10">Paper {(pager.currentPage==1?1:((pager.endIndex+1-pager.pageSize)))} to {pager.endIndex+1} of {pager.totalItems} total </label>
                                    </li>
                                </ul>}
                            </div>
                            {<div className="col-md-6 text-right">
                                {pager.pages && pager.pages.length &&
                                <ul className="pagination">
                                    {/* <li className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                                        <Link to={{ search: `1` }} className="page-link">First</Link>
                                    </li> */}
                                    <li className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                                    
                                        <Link to={{ search: `${pager.currentPage - 1}` }} className="page-link">Previous</Link>
                                    </li>
                                    {pager.pages.map(page =>
                                        <li key={page} className={`page-item number-item ${pager.currentPage === page ? 'active' : ''}`}>
                                            <Link to={{ search: `${page}` }} className="page-link">{page}</Link>
                                        </li>
                                    )}
                                    <li className={`page-item next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                                        <Link to={{ search: `${pager.currentPage + 1}` }} className="page-link">Next</Link>
                                    </li>
                                    {/* <li className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                                        <Link to={{ search: `${pager.totalPages}` }} className="page-link">Last</Link>
                                    </li> */}
                                </ul>
                    }   
                            </div>}
                        </div>
                    </div>
                </div>
            </div>

      </div>
    );
  }
}


export default ReportStore;