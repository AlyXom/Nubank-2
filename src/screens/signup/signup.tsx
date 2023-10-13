import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { api } from "@service/api";

export default function Signup() {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <View>
                <Text>Tela de registro</Text>
            </View>
            <View>
                <TouchableOpacity></TouchableOpacity>
            </View>
        </View>
    )
}