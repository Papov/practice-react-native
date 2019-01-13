import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import moment from "moment";

import styles from "./styles";

const LastConvertion = ({ base, quote, date, convertion }) => (
  <Text style={styles.smallText}>
    {`1 ${base} = ${convertion} ${quote} as of ${moment(date).format("MMMM D, YYYY")}`}
  </Text>
);

LastConvertion.propTypes = {
  base: PropTypes.string,
  quote: PropTypes.string,
  date: PropTypes.object,
  convertion: PropTypes.number
};

export default LastConvertion;
