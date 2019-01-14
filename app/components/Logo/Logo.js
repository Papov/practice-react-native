import React from "react";
import { View, Text, ImageBackground, Keyboard, Animated, Platform } from "react-native";

import styles from "./styles";

const ANIM_DURATION = 350;

class Logo extends React.Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    let keyboardShow = "keyboardWillShow";
    let keyboardHide = "keyboardWillHide";
    if (Platform.OS === "android") {
      keyboardShow = "keyboardDidShow";
      keyboardHide = "keyboardDidHide";
    }
    this.keyboardShowListener = Keyboard.addListener(keyboardShow, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(keyboardHide, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIM_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIM_DURATION
      })
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIM_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIM_DURATION
      })
    ]).start();
  };

  render() {
    const containerImageStyle = {
      ...styles.containerImageView,
      width: this.containerImageWidth,
      height: this.containerImageWidth
    };
    const imageStyle = { ...styles.imageView, width: this.imageWidth };

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <ImageBackground
            resizeMode="contain"
            source={require("./images/background.png")}
            style={styles.containerImage}
          >
            <Animated.Image
              style={imageStyle}
              resizeMode="contain"
              source={require("./images/logo.png")}
            />
          </ImageBackground>
        </Animated.View>
        <Text style={styles.text}>Currency converter</Text>
      </View>
    );
  }
}

export default Logo;
