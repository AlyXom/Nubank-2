import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { api } from "@service/api";
import { useDispatch } from "react-redux";
import auth, { authUser } from "@redux/reducers/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Colors from "types/colors";

export default function Login() {

    const { navigate } = useNavigation()

    const dispatch = useDispatch()

    const [email, getEmail] = useState<string>()
    const [password, getPassword] = useState<string>()
    const [validUser, setValidUser] = useState<boolean>(true)


    async function userLogin() {
        const response = await api.post('/session', { email, password })

        try {
            const { user, token } = response.data
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            dispatch(authUser({ user, token }))
            await AsyncStorage.setItem("@nubankapp:token", token)
            await AsyncStorage.setItem("@nubankapp:user", JSON.stringify(user))

        } catch (error) {
            setValidUser(true)
            alert("E-mail ou senha incorreto")
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
            <Image style={styles.logoImage} source={require("@icons/logonubank.png")} />
            <View style={styles.loginContainer}>
                <Text style={{ fontSize: 18, fontWeight: "700" }} >Tela de login</Text>
                <TextInput style={styles.input} onChangeText={(t) => getEmail(t)} placeholder="E-mail" />
                <TextInput style={styles.input} onChangeText={(t) => getPassword(t)} placeholder="Senha" />
                <TouchableOpacity style={styles.button} disabled={!validUser} onPress={async () => {
                    setValidUser(false)
                    await userLogin()
                }}>
                    {validUser ? <Text style={styles.buttonTextColor} >Login</Text> : <Text style={styles.buttonTextColor} >Carregando...</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigate("signup")}>
                    <Text style={styles.buttonTextColor} >Criar conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${Colors.roxo}`
    },
    logoImage: {
        width: 100,
        height: 100
    },
    loginContainer: {
        alignItems: 'center',
        backgroundColor: `${Colors.branco}`,
        width: 200,
        height: 200,
        borderRadius: 20
    },
    button: {
        backgroundColor: `${Colors.roxo}`,
        marginBottom: 15,
        marginTop: 5,
        padding: 5,
        borderRadius: 5
    },
    buttonTextColor: {
        color: `${Colors.branco}`,
        fontWeight: "700"
    },
    input: {
        borderWidth: 1,
        padding: 5,
        width: '95%',
        marginTop: 3,
        borderRadius: 10
    }
})