import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./component/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./component/homepages/About";
import Contact from "./component/homepages/Contact";
import Home from "./component/homepages/Home";
import Login from "./component/homepages/Login";
 import Registration from "./component/homepages/UserRegistration";


class App extends Component {
  state = {};
  render() {
    return (
      <div >
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/homepages/Home" component={Home} />
            <Route exact path="/homepages/About" component={About} />
            <Route exact path="/homepages/Contact" component={Contact} />
            <Route exact  path="/homepages/Login" component={Login}/>
            <Route exact path="/homepages/UserRegistartion" component={Registration}></Route>
           
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;