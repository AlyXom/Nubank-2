import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { BoldText, IconsImage } from '@styled/Scomponents'
import { PropsNavigation } from 'types/RootStackParamsList'
import { useNavigation } from '@react-navigation/native'

export default function Cont({money, isTrue}: {money?: string, isTrue?: boolean}) {
    const {navigation}: PropsNavigation = useNavigation()

    return (
        <View>
            <View style={styles.Container}>
                <View style={{ marginLeft: 20 }}>
                    <BoldText>Conta</BoldText>
                </View>
                <TouchableOpacity style={{marginRight: 20}}>
                    <Image style={{ width: 12, height: 12 }} source={require('@icons/angle-right.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 5, left: 20 }}>
                <Text style={{ fontWeight: '600', fontSize: 19 }}>{money}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})