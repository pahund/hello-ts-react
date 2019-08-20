import React from "react";
import App from "./App";

test("loads and displays the app", () => {
  expect(<App />).toMatchSnapshot();
});
