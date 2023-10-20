import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react"
import { api } from "@service/api";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { accountState } from "@redux/reducers/accountReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Signup() {

    const { navigate } = useNavigation()
    const dispatch = useDispatch()

    const [name, getName] = useState<string>()
    const [email, getEmail] = useState<string>()
    const [password, getPassword] = useState<string>()

    async function create() {
        const response = await api.post('/users', {name, email, password})

        console.log(response.data)
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <View>
                <Text>Tela de registro</Text>
            </View>
            <View>
                <TextInput onChangeText={(t) => getName(t)} placeholder="Nome" />
                <TextInput onChangeText={(t) => getEmail(t)} placeholder="E-mail" />
                <TextInput onChangeText={(t) => getPassword(t)} placeholder="Senha" />
                <TouchableOpacity onPress={async() => {
                    await create()
                    navigate("login")
                }}>
                    <Text>Criar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}