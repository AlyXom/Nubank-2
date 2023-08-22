import React from 'react'
import { View, Text, Image } from 'react-native'

export default function NotView() {
    return (
        <View style={{flexDirection: 'row', width: 30, marginTop: 10}}>
            <Image style={{width: 11, height: 11, marginLeft: 1}} source={require('@icons/circulo.png')}/>
            <Image style={{width: 11, height: 11, marginLeft: 1}} source={require('@icons/circulo.png')}/>
            <Image style={{width: 11, height: 11, marginLeft: 1}} source={require('@icons/circulo.png')}/>
            <Image style={{width: 11, height: 11, marginLeft: 1}} source={require('@icons/circulo.png')}/>
        </View>
    )
}