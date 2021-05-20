import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import {Button} from "react-bootstrap"
class Error404 extends Component {
  render(){
      return (
    <div style={{text_align: "center"}} >
      <img src="/images/error404.png" alt="404 page not found" width= "600px" height="600px" style={{display:"block" ,margin:"auto",margin_bottom:"30px"}}/>
      <NavLink to="/">
        <Button variant="danger" style={{ margin_top: "100px"}} >Go to Home Page</Button>
      </NavLink>
    </div>
  );
  }
}
export default Error404;