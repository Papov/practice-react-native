import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  button: {
    alignSelf: "flex-end",
    paddingVertical: 15,
    paddingHorizontal: 10,
    "@media ios": {
      paddingTop: 25
    }
  },
  icon: {
    width: 25
  }
});

export default styles;
