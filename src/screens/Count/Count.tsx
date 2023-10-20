import React from 'react'
import {View, Text} from 'react-native'

const sla = 0
export default function Count() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{sla.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Text>
        </View>
    )
}