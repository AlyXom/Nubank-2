import React from 'react'
import { View, Text } from 'react-native'
import { InvoiceText, InvoiceValue, InvoiceView, InvoiceAmount } from '@styled/Scomponents'
import Data from '@data/Data'
import Colors from 'types/colors'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store/store'
import NotView from '@components/NotView/NotView'
import MiniNotView from '@components/MiniNotView/MiniNotView'

export function Convert(value: number = 0) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

export default function OpenInvoice() {

    const { invoice_amount, credit_card } = useSelector((state: RootState) => state.Account)
    const creditLimit = Convert(credit_card - invoice_amount)
    const state = useSelector((state: RootState) => state.EyeState)
    const Invoice = Convert(invoice_amount)


    return (
        <InvoiceView style={{ marginLeft: 25 }}>
            <View>
                <InvoiceText>Fatura atual</InvoiceText>
            </View>
            <InvoiceAmount>
                {state ? <InvoiceValue>{Invoice}</InvoiceValue> : <NotView />}
            </InvoiceAmount>
            <Text style={{ marginTop: 10 }}>Limite disponível: {state ? <Text>{creditLimit}</Text> : <MiniNotView /> }</Text>
            <Text>Limite adicional para Pix e Boletos: {state ? <Text style={{ color: Colors.roxo }}>R$: 450,00</Text> : <MiniNotView />}</Text>
        </InvoiceView>
    )
}