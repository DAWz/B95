import React, { Component } from "react";
class Navbar extends Component {
  state = {
    navState: "menu",
    nav: "menu",
    navItems: (
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Product</a>
        </li>
        <li>
          <a href="/">Master Plan</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
    )
  };

  changeNav = () => {
    if (this.state.navState === "menu")
      this.setState({ navState: this.state.navItems });
    else this.setState({ navState: this.state.nav });
  };

  render() {
    const h1Styles = {
      display: "inline-block",
      marginRight: "10px",
      color: "white",
      padding: "10px",
      marginLeft: "10px",
      borderRight: "2px solid white",
      paddingRight: "20px",
      marginTop: "10px",
      fontWeight: '400'
    };
    const ulStyles = {
      display: "inline-block",
      listStyleType: "none",
      marginLeft: "0",
      paddingLeft: "0"
    };
    const aStyles = {
      textDecoration: "none",
      color: "white",
      paddingBottom: "4px",
      padding: "0 10px",
      fontSize: '20px'
    };
    return (
      <nav>
        <h1 style={h1Styles}>Bird95</h1>
        <span
          onMouseEnter={this.changeNav}
          onMouseLeave={this.changeNav}
          style={aStyles}
          href="/"
        >
          {this.state.navState}
        </span>
        <div className="buttons">
          <a>SIGN IN</a>
          <a>SIGN UP</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
