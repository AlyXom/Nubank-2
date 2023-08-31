import React from 'react'
import { View, Text, Image } from 'react-native'

export default function MiniNotView() {
    return (
        <View style={{flexDirection: 'row', width: 30, marginTop: 10, justifyContent: 'center' }}>
            <Image style={{width: 7, height: 7, marginLeft: 1}} source={require('@icons/circulo.png')}/>
            <Image style={{width: 7, height: 7, marginLeft: 1}} source={require('@icons/circulo.png')}/>
            <Image style={{width: 7, height: 7, marginLeft: 1}} source={require('@icons/circulo.png')}/>
            <Image style={{width: 7, height: 7, marginLeft: 1}} source={require('@icons/circulo.png')}/>
        </View>
    )
}