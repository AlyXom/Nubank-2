import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { api } from "@service/api";
import { useDispatch } from "react-redux";
import { authUser } from "@redux/reducers/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {

    const dispatch = useDispatch()

    const [email, getEmail] = useState<string>()
    const [password, getPassword] = useState<string>()
    const [validUser, setValidUser] = useState<boolean>(false)


    async function userLogin() {
        const response = await api.post('/session', { email, password })

        const { user, token } = response.data
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`
        dispatch(authUser({ user, token }))
        AsyncStorage.setItem("@nubankapp:user", JSON.stringify(user))
        AsyncStorage.setItem("@nubankapp:token", token)
        setValidUser(true)
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
            <TouchableOpacity onPress={async () => userLogin()}>
                <Text>Login</Text>
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