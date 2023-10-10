import React from 'react'
import { View, Text } from 'react-native'
import { InvoiceText, InvoiceValue, InvoiceView, InvoiceAmount, ButtonTouch } from '@styled/Scomponents'
import Data from '@data/Data'
import Colors from 'types/colors'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store/store'
import NotView from '@components/NotView/NotView'
import { Convert } from '@components/OpenInvoice/OpenInvoice'


export default function ClosedInvoice() {

    const { invoice_amount, payment_data } = useSelector((state: RootState) => state.Account)
    const state = useSelector((state: RootState) => state.EyeState)
    const Invoice = Convert(invoice_amount)

    return (
        <InvoiceView style={{ marginLeft: 25 }}>
            <View>
                <InvoiceText>Fatura fechada</InvoiceText>
            </View>
            <InvoiceAmount>
                {state ? <InvoiceValue>{Invoice}</InvoiceValue> : <NotView />}
            </InvoiceAmount>
            <View>
                <InvoiceText style={{ marginTop: 5 }}>Vencimento dia {payment_data}</InvoiceText>
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