import React, { Component } from "react";
// import {  Link } from "react-router-dom";
// import { Button } from "reactstrap";
import Navbar from "../layout/Navbar";
import Login from "./Login";

class Home extends Component {
  render() {
    return (
      <div>
        <br/>
        <h3 align="center" style={{color:"red"}}><marquee>Welcome to Poll Management System</marquee></h3>
        <br />
        <br />
        <br/>
          <div className="container" style={{float:"right",alignItems:"center",width:"80%"}}>
       
          <br />
          
          <Login />
          </div>
          {/* <Link to="/homepages/UserRegistartion" className="btn btn-outline-light">
        <Button color="info" style={{marginLeft:"120px"}} outline>
          User Registration
          </Button>
          </Link>  */}
        </div>
       
    );
  }
}

export default Home


