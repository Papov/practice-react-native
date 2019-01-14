import { observable } from "mobx";

class ScreenStore {
  @observable
  temp_base_currency = "USD";

  @observable
  temp_quote_currency = "GBP";

  @observable
  temp_base_price = "100";

  @observable
  temp_quote_price = "71.13";

  @observable
  temp_convertion_date = new Date();

  @observable
  temp_convertion_rate = 0.7113;

  changeBaseCurrency = _this => () => {
    _this.props.navigation.goBack(null);
  };

  handlePressCurrency = _this => () => {
    _this.props.navigation.navigate("CurrencyList", { title: "Base currency" });
  };

  handlePressPrice = _this => () => {
    _this.props.navigation.navigate("CurrencyList", { title: "Quote currency" });
  };

  swapCurrencies = () => {
    alert("swap currencies");
  };

  handleOptionPress = _this => () => {
    _this.props.navigation.navigate("Options", { title: "Options" });
  };
}

export const screenStore = new ScreenStore();
