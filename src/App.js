import React from "react";
import { TodoListContainer } from "./container/TodoLIstContainer";
import { css, Global } from "@emotion/core";

function App() {
  return (
    <div
      className="App"
      css={css`
        display: grid;
        place-items: center;
        place-content: center;
        align-items: center;
        height: 100vh;
      `}
    >
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html {
            font-family: sans-serif;
            font-weight: bold;
          }
        `}
      />
      <h3
        css={{
          color: "skyblue",
          letterSpacing: 1,
          margin: "0.5em",
          padding: 0
        }}
      >
        TODO
      </h3>
      <TodoListContainer />
    </div>
  );
}

export default App;
