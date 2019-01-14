import { StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import CurrencyList from "../screens/CurrencyList";
import Options from "../screens/Options";
import LastScreen from "../screens/LastScreen";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: "Options"
      }
    },
    LastScreen: {
      screen: LastScreen,
      navigationOptions: {
        headerTitle: "Last Screen"
      }
    }
  },
  {
    headerMode: "screen"
  }
);

const CurrencyListStack = createStackNavigator(
  {
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title
      })
    }
  },
  {
    headerMode: "screen"
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeStack
    },
    CurrencyList: {
      screen: CurrencyListStack
    }
  },
  {
    mode: "modal",
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
