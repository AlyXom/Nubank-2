import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { api } from "@service/api";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@redux/store/store";
import auth from "@redux/reducers/auth";

export default function Login() {

    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.Auth)

    const [email, getEmail] = useState<string>()
    const [password, getPassword] = useState<string>()
    const [data, getData] = useState({})


    async function userLogin() {
        const response = await api.post('/session', { email, password })

        if (!response) {
            return console.log("Usuario nao encontrado")
        }

        try {
            const { user, token } = response.data
            api.defaults.headers.common["Authorization"] = token
            getData({ user, token })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={styles.container}>
            <Text>Tela de login</Text>
            <TextInput onChangeText={(t) => getEmail(t)} placeholder="E-mail" />
            <TextInput onChangeText={(t) => getPassword(t)} placeholder="Senha" />
            <TouchableOpacity onPress={async () => {
                userLogin()
            }}>
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