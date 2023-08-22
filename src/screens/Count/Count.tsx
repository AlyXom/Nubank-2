import React from 'react'
import {View, Text} from 'react-native'
import Data from '@data/Data'

const {name, amount, fatura} = Data

export default function Count() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{amount.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Text>
        </View>
    )
}