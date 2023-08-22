import React from "react";
import { BoldText, AngleRightTouch, AngleRightImg } from "@styled/Scomponents";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function BankLoan() {
    return (
        <View style={Style.container}>
            <View style={Style.LoanView}>
                <TouchableOpacity>
                    <BoldText>Empréstimo</BoldText>
                </TouchableOpacity>
                <AngleRightTouch>
                    <AngleRightImg source={require('@icons/angle-right.png')}/>
                </AngleRightTouch>
            </View>
            <View style={{marginLeft: 25}}>
                <Text style={{marginBottom: 5, fontSize: 16}}>Valor disponível de até</Text>
                <BoldText>R$ 10.000,00</BoldText>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        marginTop: 20
    },
    LoanView: {
        marginLeft: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})