import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class PollNav extends Component {
  render() {
    return (
      <div className="poll-nav">
        <NavLink to="unvoted">
          
          <p>Unvoted </p>
        </NavLink>
        <NavLink to="voted">  
          <p>Voted</p>
        </NavLink>
</div>

    );
  }
}

export default PollNav;
