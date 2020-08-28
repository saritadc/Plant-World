import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import "./App.css";

import Contact from "./pages/contactPage/contact";
import AboutUs from "./pages/aboutusPage/aboutUs";
import Banner from "./components/bannerContent";
import Plants from "./components/plants";
import Footer from "./components/footer";
import routes from "./constants/routes";
import "./assests/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Banner />
        <Switch>
          <Route
            key="category1"
            exact
            path={routes.STORE}
            component={Plants}
          ></Route>
          <Route
            key="category3"
            exact
            path={routes.ABOUT_US}
            component={AboutUs}
          ></Route>
          <Route
            key="category4"
            exact
            path={routes.CONTACT_US}
            component={Contact}
          ></Route>
          <Redirect from={routes.CATEGORY} exact to={routes.STORE} />
          <Route key="category5" exact path={routes.HOME} component={Plants}></Route>
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
