import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight, TextInput } from "react-native";
import color from "color";
import styles from "./styles";

const InputWithButton = props => {
  const { buttonText, onPress, editable = true } = props;

  const buttonHoverColor = color(styles.$buttonColorBase).darken(Number(styles.$buttonColorModief));

  const containerStyle = [styles.container];
  if (!editable) {
    containerStyle.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyle}>
      <TouchableHighlight
        underlayColor={buttonHoverColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  editable: PropTypes.bool
};

export default InputWithButton;
