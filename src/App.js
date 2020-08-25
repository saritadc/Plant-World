import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import "./App.css";

import ListCategory from './components/common/listGroup'
import Banner from './components/bannerContent';
import ContactUs from "./components/contactUs";
import AboutUs from "./components/aboutUs";
import Plants from './components/plants';
import Footer from './components/footer';
import NavBar from './components/navBar';
import './assests/css/style.css';

function App() {
  return (
    <div className="container">
      <Banner/>
        <BrowserRouter>
          <Switch>
            <Route path="/store" exact component={Plants}></Route>
            <Route path="/category" exact  component={ListCategory}></Route>
            <Route path="/aboutus" exact  component={AboutUs}></Route>
            <Route path="/contactus"  exact component={ContactUs}></Route>
            <Redirect from="/" exact to="/store" />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;