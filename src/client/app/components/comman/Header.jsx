import React from 'react';
import { Link} from 'react-router-dom'
// 
class Header extends React.Component {
    constructor() {
        super();
        console.log("------",process.env)
        this.state = {
            logoImg:"../../../../assets/logo.jpg",
        };
       
    }

    componentDidMount(){
       
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
        <Link  className="navbar-brand" to="/">
        <img src='./assets/logo.jpg' alt="" />
        </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link  className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/reportStore">Reports Store</Link>
                    </li> 
                    <li className="nav-item">
                       <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>  
        </nav>
        
        </React.Fragment>
    );
  }
}


export default Header;