import React, { Component } from "react";

export default class Button extends Component {
  render() {
    let { title, task } = this.props;
    return (
      <div>
        <button
          onClick={task}
          style={{
            opacity: "0.7",
            borderRadius: "50%",
            backgroundSize: "cover",
            margin: "2px"
          }}
        >
          {title}
        </button>
      </div>
    );
  }
}
