import React from "react";
import EStyleSheets from "react-native-extended-stylesheet";
import { Provider } from "mobx-react";

import { screenStore } from "./config/store";
import Navigator from "./config/routes";

EStyleSheets.build({
  $lightBlue: "#4F6D7A",
  $white: "#ffffff",
  $border: "#e2e2e2",
  $inputText: "#797979",
  $lightGray: "#F0F0F0",
  $darkColor: "#424242"
});

export default () => (
  <Provider screenStore={screenStore}>
    <Navigator />
  </Provider>
);
