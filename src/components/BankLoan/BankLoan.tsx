import React from "react";
import { BoldText, AngleRightTouch, AngleRightImg } from "@styled/Scomponents";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from "react-redux";
import { RootState } from "@redux/store/store";
import NotView from "@components/NotView/NotView";
import { Convert } from "@components/OpenInvoice/OpenInvoice";

export default function BankLoan() {

    const { loan } = useSelector((state: RootState) => state.Account)
    const state = useSelector((state: RootState) => state.EyeState)

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
                {state ? <BoldText>{Convert(loan)}</BoldText> : <NotView />}
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