import React, { Component } from "react";
import Button from "./Button";
import "./style.css";

export default class FuctionCount extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    if (this.state.count < 1) {
      this.setState({
        value: 0
      });
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
  };
  getInitialState = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div>
        <h2>Count: {count} </h2>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            className="plus"
            title={"+"}
            task={() => this.incrementCount()}
          />
          <Button
            className="minus"
            title={"-"}
            task={() => this.decrementCount()}
          />
          <Button
            className="reset"
            title={"Reset"}
            task={() => this.getInitialState()}
          />
        </div>
      </div>
    );
  }
}
