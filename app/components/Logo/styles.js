import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const imageWidth = Dimensions.get("window").width / 2;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  container: {
    alignItems: "center"
  },
  containerImageView: {
    width: "$largeContainerSize",
    height: "$largeContainerSize"
  },
  containerImage: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  imageView: {
    width: "$largeImageSize"
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 29,
    letterSpacing: -0.5,
    color: "$white",
    marginTop: 10
  }
});
