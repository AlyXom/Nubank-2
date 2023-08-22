import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Colors from 'types/colors'

export default function InfosCard() {
    return (
        <ScrollView style={{marginTop: 30, height: 90}} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={Style.container}>
                <Text style={{marginLeft: 15}}><Text style={{color: Colors.roxo}}>Produtos e limites do seu jeito.</Text> Traga seus dados</Text>
            </View>
            <View style={Style.container}>
                <Text style={{marginLeft: 15}}>Você tem até <Text style={{color: Colors.roxo}}>R$ 2.000,00 </Text>disponiveis para empréstimo</Text>
            </View>
            <View style={Style.container}>
                <Text style={{marginLeft: 15}}><Text style={{color: Colors.roxo}}>Convide amigos para o Nubank </Text>e desbloqueie brasões incriveis</Text>
            </View>
        </ScrollView>
    )
}

const Style = StyleSheet.create({
    container: {
        marginLeft: 20,
        backgroundColor: Colors.cinza,
        width: 320,
        height: 75,
        borderRadius: 20,
        justifyContent: 'center'
    }
})