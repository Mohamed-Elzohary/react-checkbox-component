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
        <label className="input-cont" htmlFor={id}>
          <div className="input-cbx-cont">
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
          </div>

          <label id="input-label-cont" htmlFor={id}>
            {title}
          </label>
        </label>
      </form>
    );
  }
}

export default Checkbox;
