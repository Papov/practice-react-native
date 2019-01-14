import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";

const styles = EStyleSheet.create({
  $underlayColor: "$border",
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    color: "$darkColor"
  },
  separator: {
    marginLeft: 20,
    backgroundColor: "$border",
    height: StyleSheet.hairlineWidth,
    flex: 1
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: "transparent",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  iconVisible: {
    backgroundColor: "$lightBlue"
  },
  checkmarkIcon: {
    width: 18,
    height: 18
  }
});

export default styles;
