import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@screens/login/login";
import Signup from "@screens/signup/signup";

const Stack = createNativeStackNavigator()


export default function AuthRoutes() {
    return (
        <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="signup" component={Signup}/>
        </Stack.Navigator>
    )
}