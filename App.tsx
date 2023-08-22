import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { store } from "@redux/store/store";
import { Provider } from "react-redux";
import Home from "@screens/Home/Home";
import Count from "@screens/Count/Count";
import Account from "@screens/Account/Account";
import TabBar from "@components/TabBar/TabBar";
import Money from "@screens/Money/Money";
import Store from "@screens/Store/Store";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeTab = () => {
  return (
    <Provider store={store}>
      <Tab.Navigator tabBar={(props) => (<TabBar {...props}/>)} screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: "compare-arrows"}}/>
      <Tab.Screen name="Money" component={Money} options={{tabBarIcon: "attach-money"}}/>
      <Tab.Screen name="Store" component={Store} options={{tabBarIcon: "storefront"}}/>
    </Tab.Navigator>
    </Provider>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="HomeTab" component={HomeTab}/>
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="Count" component={Count}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}