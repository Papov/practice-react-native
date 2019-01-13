import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $buttonColorBase: "$white",
  $buttonColorModief: 0.1,

  container: {
    backgroundColor: "$white",
    width: "90%",
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 11
  },
  containerDisabled: {
    backgroundColor: "$lightGray"
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 15,
    color: "$lightBlue"
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: "$border"
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    color: "$inputText",
    paddingHorizontal: 8
  }
});
