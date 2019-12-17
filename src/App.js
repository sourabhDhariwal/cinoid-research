import React from 'react';
import { Route, Link,Switch, BrowserRouter,HashRouter  } from 'react-router-dom'
import './App.css';
import Header from './client/app/components/comman/Header.jsx';
import Footer from './client/app/components/comman/Footer.jsx';
import Home from './client/app/components/Home.jsx';
import ContactUs from './client/app/components/ContactUs.jsx';
// import AboutUS from './client/app/components/Abo utUS.jsx';
function App() {
  return (
    <div className="App">
         <Header/>
         <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route  path="/contact" component={ContactUs}></Route>
          </Switch>
        </BrowserRouter>
       
     
      <Footer />
    </div>

  );
}

export default App;
