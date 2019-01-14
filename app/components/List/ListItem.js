import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight } from "react-native";

import Icon from "./Icon";
import styles from "./styles";

const ListItem = ({
  onPress,
  text,
  selected = false,
  checkmark = true,
  visible = true,
  customIcon = null
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected && <Icon checkmark={checkmark} visible={visible} />}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element
};

export default ListItem;
