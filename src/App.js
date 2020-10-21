import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(prop) {
    super();
    this.state = {
      total_lecs: 2,
      finished_lecs: 0
    };
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
      <div className="App">
        <div className="lectures">
          <h3>إذا أنهيت درسك فاضغط على علامة الصح</h3>
          <h3>
            {this.state.finished_lecs} / {this.state.total_lecs}
          </h3>
          <form>
            <div className="input-cont">
              <div className="cbx-cont">
                <label className="label">
                  <input
                    className="label__checkbox"
                    type="checkbox"
                    id="watched"
                    onChange={this.cbxChange}
                  />
                  <span className="label__text">
                    <span className="label__check">
                      <i className="fa fa-check icon"></i>
                    </span>
                  </span>
                </label>

                <div id="watched-label-cont">
                  <label htmlFor="watched">
                    الدرس الأول: الكلام في اصطلاح النحويين: الاسم والفعل والحرف
                  </label>
                </div>
              </div>
            </div>
          </form>

          <form>
            <div className="input-cont">
              <div className="cbx-cont">
                <label className="label">
                  <input
                    className="label__checkbox"
                    type="checkbox"
                    id="watched1"
                    onChange={this.cbxChange}
                  />
                  <span className="label__text">
                    <span className="label__check">
                      <i className="fa fa-check icon"></i>
                    </span>
                  </span>
                </label>

                <div id="watched-label-cont">
                  <label htmlFor="watched1">
                    الدرس الأول: الكلام في اصطلاح النحويين: الاسم والفعل والحرف
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
