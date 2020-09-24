import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

export const List = ({ data, deleteTodoList }) => {
  return (
    <ul data-testid="todoList">
      {data.map((value, index) => {
        return (
          <li
            key={index}
            css={css`
              margin: 1em 0;
              text-align: center;
              list-style: none;
              display: flex;
              justify-content: space-between;
              width: 100%;
            `}
          >
            {value}
            <span
              css={css`
                margin-left: 0.5em;
                border: 1px solid black;
                padding: 0.5em;
                font-size: 0.8rem;
              `}
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
