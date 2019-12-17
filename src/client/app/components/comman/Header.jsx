import React from 'react';

import { Route, Link,Switch, BrowserRouter as Router    } from 'react-router-dom'
import config from '../../../../config.json';

class Header extends React.Component {
    constructor() {
        super();
        console.log(config.header_menu_items)
        this.state = {
            logoImg:"../../../../assets/logo.jpg",
        };
       
    }

    componentDidMount(){
        console.log(process.env.CINOID_LOGO_IMAGE_PATH)
    }

  render() {
    return (
        <React.Fragment>
       
       <div className="top_bar">
            <ul>
                <li>
                    Email : cinoidresearch.com {}
                </li>
                <li>
                    Phone : +44 752 064 0013
                </li>
            </ul>
        </div>
        <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="#">
                <img src={this.state.logoImg} alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="search.html">Reports Store</a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>  
        </nav>
        
        </React.Fragment>
        //  <div>
        //      <React.Fragment></React.Fragment>
        // </div>
       
         
      
    );
  }
}


export default Header;