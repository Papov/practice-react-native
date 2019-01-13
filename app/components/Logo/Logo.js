import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      resizeMode="contain"
      source={require("./images/background.png")}
      style={styles.containerImage}
    >
      <Image style={styles.image} resizeMode="contain" source={require("./images/logo.png")} />
    </ImageBackground>
    <Text style={styles.text}>Currency converter</Text>
  </View>
);

export default Logo;