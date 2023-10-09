import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@screens/login/login";
import Signup from "@screens/signup/signup";

const Stack = createNativeStackNavigator()


export default function AuthRoutes() {
    return (
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="signup" component={Signup}/>
        </Stack.Navigator>
    )
}