import React from "react";
import { connect } from "react-redux";

const Todos = (props) => {
  return (
    <ul>
      {props.allTodos.map((todo) => {
        return (
          <li>
            <input type="checkbox" />
            <p>{todo.text}</p>
            <span>x</span>
          </li>
        );
      })}
    </ul>
  );
};

function mapStateToProps({ allTodos }) {
  return {
    allTodos,
  };
}
export default connect(mapStateToProps)(Todos);
