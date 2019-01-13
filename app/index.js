import React from "react";
import EStyleSheets from "react-native-extended-stylesheet";
import { Provider } from "mobx-react";
import { homeScreenStore } from "./config/store";
import Home from "./screens/Home";

EStyleSheets.build({
  $lightBlue: "#4F6D7A",
  $white: "#ffffff",
  $border: "#e2e2e2",
  $inputText: "#797979",
  $lightGray: "#F0F0F0"
});

export default () => (
  <Provider homeScreenStore={homeScreenStore}>
    <Home />
  </Provider>
);
