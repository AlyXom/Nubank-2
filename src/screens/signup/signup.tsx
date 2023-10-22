import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
import { useState } from "react"
import { api } from "@service/api";
import { useNavigation } from "@react-navigation/native";
import Colors from "types/colors";

export default function Signup() {

    const { navigate } = useNavigation()

    const [name, getName] = useState<string>()
    const [email, getEmail] = useState<string>()
    const [password, getPassword] = useState<string>()
    const [validUser, setValidUser] = useState<boolean>(true)

    async function create() {

        const emailIsValid = (email: string) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email)
        }

        if(email == undefined || email == "") {
            setValidUser(true)
            return alert("Preencha todos os campos")
            
        }

        if(name == undefined || name == "") {
            setValidUser(true)
            return alert("Preencha todos os campos")
        }

        if(password == undefined || password == "") {
            setValidUser(true)
            return alert("Preencha todos os campos")
        }


        if(!emailIsValid(email)) {
            setValidUser(true)
            return alert("Este email nao e valido")
        }

        console.log(name, email, password)

        const response = await api.post('/users', { name, email, password })

        try {
            console.log(response.data)
            navigate("login")
        } catch (error) {
            setValidUser(true)
            alert("Nao foi possivel criar a conta")
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={require("@icons/logonubank.png")} />
            <View style={styles.loginContainer}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>Tela de registro</Text>
                <TextInput style={styles.input} onChangeText={(t) => getName(t)} placeholder="Nome" />
                <TextInput style={styles.input} onChangeText={(t) => getEmail(t)} placeholder="E-mail" />
                <TextInput style={styles.input} onChangeText={(t) => getPassword(t)} placeholder="Senha" />
                <TouchableOpacity disabled={!validUser} style={styles.button} onPress={async () => {
                    setValidUser(false)
                    await create()
                }}>
                    {validUser ? <Text style={styles.buttonTextColor}>Criar</Text> : <Text style={styles.buttonTextColor}>Carregando...</Text>}
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