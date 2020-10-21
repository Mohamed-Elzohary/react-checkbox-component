import React, { Component } from "react";
import "./styles.css";

import Checkbox from "./components/Checkbox";

class App extends Component {
  constructor(prop) {
    super();
    this.state = {
      lectures: [
        {
          id: 1,
          title: "الدرس الأول"
        },
        {
          id: 2,
          title: "الدرس الثاني"
        },
        {
          id: 3,
          title: "الدرس الثالث"
        },
        {
          id: 4,
          title: "الدرس الرابع"
        },
        {
          id: 5,
          title: "الدرس الرابع"
        },
        {
          id: 6,
          title: "الدرس الرابع"
        }
      ],
      total_lecs: 0,
      finished_lecs: 0
    };
  }

  componentDidMount() {
    if (this.state.lectures.length > 0) {
      this.setState({
        total_lecs: this.state.lectures.length
      });
    } else {
      this.setState({
        total_lecs: 0
      });
    }
  }

  cbxChange = (e) => {
    console.log("cbx changed: " + e.target.id + " - " + e.target.checked);

    if (e.target.checked) {
      this.setState({ finished_lecs: this.state.finished_lecs + 1 });
    } else {
      this.setState({ finished_lecs: this.state.finished_lecs - 1 });
    }
  };

  render() {
    return (
      <div
        className={
          this.props.expanded ? "sidebar sidebar--expanded" : "sidebar"
        }
        onClick={this.props.toggleSidebar}
      >
        <span className="shape"></span>
        <span className="shape"></span>

        <div className="lectures">
          <h3>إذا أنهيت درسك فاضغط على علامة الصح</h3>
          <h3>
            {this.state.finished_lecs} / {this.state.total_lecs}
          </h3>

          {this.state.lectures.map((lecture) => {
            return (
              <Checkbox
                key={lecture.id}
                id={lecture.id}
                title={lecture.title}
                onChange={this.cbxChange}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
