import React, { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { List } from "../components/List";
import { deleteOne } from "../utils";

export const TodoListContainer = () => {
  const [state, setState] = useState({ value: "", list: [] });

  const deleteTodoList = key => {
    const res = deleteOne({ list: [...state.list], key });
    setState({
      ...state,
      list: res
    });
  };

  return (
    <div>
      <Input
        value={state.value}
        onChange={e => {
          setState({
            ...state,
            value: e.target.value
          });
        }}
      />
      <Button
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
      <List data={state.list} deleteTodoList={deleteTodoList} />
    </div>
  );
};
