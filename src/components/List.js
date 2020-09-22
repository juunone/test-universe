import React from "react";
import PropTypes from "prop-types";

export const List = ({ data, deleteList }) => {
  return (
    <ul data-testid="todoList">
      {data.map((value, index) => {
        return (
          <li key={index} style={{ margin: "1em 0" }}>
            {value}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                deleteList(index);
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
  deleteList: PropTypes.func.isRequired
};
