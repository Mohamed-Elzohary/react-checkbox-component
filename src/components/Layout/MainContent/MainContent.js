import React, { Component } from "react";
import "./MainContent.css";

class MainContent extends Component {
  render() {
    return (
      <section
        className={
          this.props.expanded
            ? "main-content main-content--expanded"
            : "main-content"
        }
      >
        <header>
          <span></span>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </header>
        <div className="container">
          <div className="module--full"></div>
          <div className="module-wrapper">
            <div className="module--half"></div>
            <div className="module--half"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainContent;
