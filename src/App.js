import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { increase, decrise } from "./action/Action";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Counter</h2>
        <div>
          <button className="countboutton" onClick={this.props.decrise}>
            -
          </button>
          <span className="count">{this.props.count}</span>
          <button className="countboutton" onClick={this.props.increase}>
            +
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch(increase()),
    decrise: () => dispatch(decrise()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
