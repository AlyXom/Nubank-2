import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { BoldText, AngleRightTouch, AngleRightImg } from '@styled/Scomponents'
import OpenInvoice from '@components/OpenInvoice/OpenInvoice'
import ClosedInvoice from '@components/ClosedInvoice/ClosedInvoice'

const currentDay = new Date().getDate()

export default function InvoiceAmount({closing, paymentData}: {closing: number, paymentData: number}) {
    return (
        <View style={Style.container}>
            <View style={Style.creditView}>
                <TouchableOpacity>
                    <BoldText style={{fontSize: 20}}>Cartão de Crédito</BoldText>
                </TouchableOpacity>
                <AngleRightTouch style={Style.touchable}>
                    <AngleRightImg source={require('@icons/angle-right.png')}/>
                </AngleRightTouch>
            </View>
            <View style={{marginTop: 15}}>
                {currentDay >= closing && currentDay <= paymentData ? <ClosedInvoice/> : <OpenInvoice/> }
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        marginTop: 20
    },
    creditView: {
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    touchable: {
        marginRight: 20,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
})