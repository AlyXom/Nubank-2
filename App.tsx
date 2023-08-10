import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home/Home";


const { Navigator, Screen } = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} options={{headerShown: false}}/>
      </Navigator>
    </NavigationContainer>
  );
}

