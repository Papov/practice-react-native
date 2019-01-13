import { observable } from "mobx";

class HomeScreenStore {
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

  handlePressCurrency = () => {
    alert("currency");
  };

  handlePressPrice = () => {
    alert("price");
  };

  swapCurrencies = () => {
    alert("swap currencies");
  };

  handleOptionPress = () => {
    alert("option");
  };
}

export const homeScreenStore = new HomeScreenStore();
