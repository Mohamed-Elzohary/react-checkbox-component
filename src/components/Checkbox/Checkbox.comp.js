import React, { Component } from "react";
import "./Checkbox.css";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      onChange: this.props.onChange
    };
  }

  render() {
    var { id, title, onChange } = this.state;
    return (
      <form>
        <div className="input-cont">
          <div className="cbx-cont">
            <label className="label">
              <input
                className="label__checkbox"
                type="checkbox"
                id={id}
                onChange={onChange}
              />
              <span className="label__text">
                <span className="label__check">
                  <i className="fa fa-check icon"></i>
                </span>
              </span>
            </label>

            <div id="watched-label-cont">
              <label htmlFor={id}>{title}</label>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Checkbox;
