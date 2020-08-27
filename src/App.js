import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import "./App.css";

import ListGroup from './components/common/listGroup'
import Banner from './components/bannerContent';
import ContactUs from "./pages/contactusPage/contactUs";
import AboutUs from "./pages/aboutusPage/aboutUs";
import Plants from './components/plants';
import Footer from './components/footer';
import './assests/css/style.css';
import Router from "./Router";

function App() {
  return (
    <div className="container">
        <Banner />
        <BrowserRouter>
          <Switch>
            <Route exact path="/store" component={Plants}></Route>
            <Route exact path="/category" component={ListGroup}></Route>
            <Route exact path="/aboutus"  component={AboutUs}></Route>
            <Route exact path="/contactus" component={ContactUs}></Route>
            {/* <Redirect from="/" exact to="/store" /> */}
            <Route exact path="/" exact component={Plants}></Route>
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
