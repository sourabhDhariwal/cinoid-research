import React from 'react';
import { Route, Link,Switch, BrowserRouter,HashRouter  } from 'react-router-dom'
import './App.css';
import socketIOClient from "socket.io-client";
import config from './config.json';
import Header from './client/app/components/comman/Header.jsx';
import Footer from './client/app/components/comman/Footer.jsx';
import Home from './client/app/components/Home.jsx';
import ContactUs from './client/app/components/ContactUs.jsx';
import ReportStore from './client/app/components/ReportStore.jsx'
import AboutUS from './client/app/components/AboutUs.jsx';
//  require('dotenv').config()
function App() {
  return (
    <div className="App">
         
         <BrowserRouter>
            <Header/>
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route  path="/contact" component={ContactUs}></Route>
            <Route  path="/reportStore" component={ReportStore}></Route>
            <Route  path="/about" component={AboutUS}></Route>
            </Switch>
          </BrowserRouter>
            <Footer />
    </div>

  );
}

export default App;
