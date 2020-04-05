import React from "react";
import { connect } from "react-redux";
import Todos from "./Todos";
import Footer from "./Footer";
import { addTodoAction } from "./store/action";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: "",
    };
  }
  handleAddTodo = ({ target }) => {
    this.setState({ todoInput: target.value });
  };
  addTodo = () => {
    // using dispatch
    this.props.dispatch(addTodoAction(this.state.todoInput));
    // add out todo to redux store
    this.setState({ todoInput: "" });
  };

  render() {
    return (
      <div>
        <h1>todos</h1>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={this.state.todoInput} // controlled component
          onChange={this.handleAddTodo}
        />
        <button onClick={this.addTodo}>Add Todo</button>
        <Todos />
        <Footer />
      </div>
    );
  }
}

// consume

function mapStateToProps(state) {
  return { allTodos: state.allTodos };
}

export default connect(mapStateToProps)(App);
