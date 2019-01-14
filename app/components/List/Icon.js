import React from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";

import styles from "./styles";

const Icon = ({ checkmark, visible }) => {
  const iconStyle = [styles.icon];
  if (visible) {
    iconStyle.push(styles.iconVisible);
  }
  return (
    <View style={iconStyle}>
      <Image
        source={require("./images/check.png")}
        style={styles.checkmarkIcon}
        resizeMode="contain"
      />
    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool
};

export default Icon;
