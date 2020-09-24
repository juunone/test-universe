import React from "react";
import PropTypes from "prop-types";

export const List = ({ data, deleteTodoList }) => {
  return (
    <ul data-testid="todoList">
      {data.map((value, index) => {
        return (
          <li key={index} style={{ margin: "1em 0" }}>
            {value}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                deleteTodoList(index);
              }}
            >
              X
            </span>
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  deleteTodoList: PropTypes.func.isRequired
};
