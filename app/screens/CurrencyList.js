import React from "react";
import PropTypes from "prop-types";
import { View, StatusBar, FlatList } from "react-native";
import { observer, inject } from "mobx-react";

import { ListItem, Separator } from "../components/List";
import currencies from "../config/data";

@inject("screenStore")
@observer
class CurrencyList extends React.Component {
  static propTypes = {
    screenStore: PropTypes.object,
    changeBaseCurrency: PropTypes.func,
    temp_base_currency: PropTypes.string
  };

  render() {
    const {
      screenStore: { changeBaseCurrency, temp_base_currency }
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              selected={item === temp_base_currency}
              text={item}
              onPress={changeBaseCurrency(this)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;
