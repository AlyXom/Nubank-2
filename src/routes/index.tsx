import { NavigationContainer } from "@react-navigation/native";
import UserRoutes from "@routes/user.routes";
import AuthRoutes from "@routes/auth.routes";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store/store";

export default function Routes() {


    const isAuth = useSelector((state:RootState) => state.Auth.token)

    return (
        <NavigationContainer>
            { isAuth ? <UserRoutes /> : <AuthRoutes /> }
        </NavigationContainer>
    )
}