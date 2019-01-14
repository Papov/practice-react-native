import React from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConvertion } from "../components/Texts";
import { Header } from "../components/Header";

@inject("screenStore")
@observer
class Home extends React.Component {
  static propTypes = {
    temp_base_currency: PropTypes.string,
    temp_quote_currency: PropTypes.string,
    temb_base_price: PropTypes.string,
    temp_quote_price: PropTypes.string,
    handlePressCurrency: PropTypes.func,
    handlePressPrice: PropTypes.func,
    screenStore: PropTypes.object,
    swapCurrencies: PropTypes.func,
    temp_convertion_date: PropTypes.object,
    temp_convertion_rate: PropTypes.number,
    handleOptionPress: PropTypes.func
  };

  render() {
    const {
      screenStore: {
        temp_base_currency,
        temp_quote_currency,
        handlePressCurrency,
        temp_base_price,
        temp_quote_price,
        handlePressPrice,
        swapCurrencies,
        temp_convertion_date,
        temp_convertion_rate,
        handleOptionPress
      }
    } = this.props;
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={handleOptionPress(this)} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={temp_base_currency}
            onPress={handlePressCurrency(this)}
            defaultValue={temp_base_price}
            keyboardType="numeric"
          />
          <InputWithButton
            buttonText={temp_quote_currency}
            onPress={handlePressPrice(this)}
            defaultValue={temp_quote_price}
            keyboardType="numeric"
            editable={false}
          />
          <LastConvertion
            base={temp_base_currency}
            quote={temp_quote_currency}
            date={temp_convertion_date}
            convertion={temp_convertion_rate}
          />
          <ClearButton text="reverse currencies" onPress={swapCurrencies} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
