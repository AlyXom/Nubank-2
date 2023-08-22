import React from 'react'
import { View, Text } from 'react-native'
import { InvoiceText, InvoiceValue, InvoiceView, InvoiceAmount, ButtonTouch } from '@styled/Scomponents'
import Data from '@data/Data'
import Colors from 'types/colors'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store/store'
import NotView from '@components/NotView/NotView'

const { invoice } = Data

const Invoice = invoice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


export default function ClosedInvoice() {

    const state = useSelector((state: RootState) => state.EyeState)

    return (
        <InvoiceView style={{ marginLeft: 25 }}>
            <View>
                <InvoiceText>Fatura fechada</InvoiceText>
            </View>
            <InvoiceAmount>
                {state ? <InvoiceValue>{Invoice}</InvoiceValue> : <NotView />}
            </InvoiceAmount>
            <View>
                <InvoiceText style={{ marginTop: 5 }}>Vencimento dia 20</InvoiceText>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <ButtonTouch>
                        <Text style={{color: 'white', fontSize: 17, fontWeight: '600', textAlign: 'center'}}>Pagar fatura</Text>
                    </ButtonTouch>
                    <ButtonTouch style={{backgroundColor: Colors.cinza}}>
                        <Text style={{fontSize: 17, fontWeight: '600'}}>Parcelar</Text>
                    </ButtonTouch>
                </View>
            </View>
        </InvoiceView>
    )
}