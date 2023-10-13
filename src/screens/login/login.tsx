import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { api } from "@service/api";
import { useDispatch } from "react-redux";
import auth, { authUser } from "@redux/reducers/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function Login() {

    const { navigate } = useNavigation()

    const dispatch = useDispatch()

    const [email, getEmail] = useState<string>()
    const [password, getPassword] = useState<string>()
    const [validUser, setValidUser] = useState<boolean>(false)


    async function userLogin() {
        const response = await api.post('/session', {email, password})

        try {
            const { user, token } = response.data
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            dispatch(authUser({user, token}))
            await AsyncStorage.setItem("@nubankapp:token", token)
            await AsyncStorage.setItem("@nubankapp:user", JSON.stringify(user))
            setValidUser(true)

        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        async function Remember() {
            const token = await AsyncStorage.getItem("@nubankapp:token")
            const user = await AsyncStorage.getItem("@nubankapp:user")

            if (token && user) {
                api.defaults.headers.common["Authorization"] = `Bearer ${token}`
                dispatch(authUser({ user: JSON.parse(user), token }))
            }

        }

        Remember()
    }, [])


    return (
        <View style={styles.container}>
            {validUser ? <Text>E-mail ou senha incorreto</Text> : <Text></Text>}
            <Text>Tela de login</Text>
            <TextInput onChangeText={(t) => getEmail(t)} placeholder="E-mail" />
            <TextInput onChangeText={(t) => getPassword(t)} placeholder="Senha" />
            <TouchableOpacity onPress={async () => await userLogin()}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 10}} onPress={() => navigate("signup")}>
                <Text>Criar conta</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})