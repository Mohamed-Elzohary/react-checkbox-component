import React, { Component } from "react";
import "./Layout.css";

import MainContent from "./MainContent/MainContent";
import Sidebar from "./Sidebar/Sidebar";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggleSidebar() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    return (
      <main>
        <Sidebar
          toggleSidebar={this.toggleSidebar.bind(this)}
          expanded={this.state.expanded}
        />
        <MainContent expanded={this.state.expanded} />
      </main>
    );
  }
}

export default Layout;
