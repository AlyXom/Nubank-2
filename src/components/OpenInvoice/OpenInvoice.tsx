import React from 'react'
import { View, Text } from 'react-native'
import { InvoiceText, InvoiceValue, InvoiceView, InvoiceAmount } from '@styled/Scomponents'
import Data from '@data/Data'
import Colors from 'types/colors'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store/store'
import NotView from '@components/NotView/NotView'
import MiniNotView from '@components/MiniNotView/MiniNotView'

const { name, amount, invoice, avatar } = Data

const Invoice = invoice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

export default function OpenInvoice() {

    const state = useSelector((state: RootState) => state.EyeState)

    return (
        <InvoiceView style={{ marginLeft: 25 }}>
            <View>
                <InvoiceText>Fatura atual</InvoiceText>
            </View>
            <InvoiceAmount>
                {state ? <InvoiceValue>{Invoice}</InvoiceValue> : <NotView />}
            </InvoiceAmount>
            <Text style={{ marginTop: 10 }}>Limite disponível: {state ? <Text>R$ 200,00</Text> : <MiniNotView /> }</Text>
            <Text>Limite adicional para Pix e Boletos: {state ? <Text style={{ color: Colors.roxo }}>R$: 450,00</Text> : <MiniNotView />}</Text>
        </InvoiceView>
    )
}