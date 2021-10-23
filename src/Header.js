import React from "react";
import "./styles.css";

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <nav>
          <div className="nav-wrapper theme-color">
            <div className="header-content">Moon Forecast</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
