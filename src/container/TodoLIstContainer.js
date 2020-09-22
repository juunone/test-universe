import React, { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { List } from "../components/List";

const TodoListContainer = () => {
  const [state, setState] = useState({ value: "", list: [] });

  const renderList = () => {
    return state.list.map((value, index) => {
      return (
        <li key={index} style={{ margin: "1em 0" }}>
          {value}{" "}
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
    });
  };

  const deleteList = key => {
    const filtered = state.list.findIndex((value, index) => {
      return index === key;
    });
    const newList = [...state.list];
    newList.splice(filtered, 1);
    setState({
      ...state,
      list: newList
    });
  };

  return (
    <div>
      <Input
        data-testid="todoInput"
        value={state.value}
        onChange={e => {
          setState({
            ...state,
            value: e.target.value
          });
        }}
      />
      <Button
        data-testid="todoButton"
        primary
        size="large"
        label="Add"
        backgroundColor="purple"
        color="white"
        onClick={() => {
          const newList = [...state.list];
          if (state.value !== "") newList.push(state.value);
          setState({
            value: "",
            list: newList
          });
        }}
      />
      {/* <ul data-testid="todoList">{state.list.length ? renderList() : ""}</ul> */}
      <List data={state.list} deleteList={deleteList} />
    </div>
  );
};

export default TodoListContainer;
