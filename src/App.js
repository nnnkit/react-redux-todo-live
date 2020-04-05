import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: "",
    };
  }

  render() {
    return (
      <div>
        <h1>todos</h1>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={this.state.todoInput}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allTodos: state.allTodos,
  };
}

export default connect(mapStateToProps)(App);
