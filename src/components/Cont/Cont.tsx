import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { BoldText, AngleRightTouch, AngleRightImg } from '@styled/Scomponents'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store/store'
import NotView from '@components/NotView/NotView'

export default function Cont({ money }: { money?: any }) {
    const navigation = useNavigation()
    const state = useSelector((state: RootState) => state.EyeState)
    const Money = money.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})


    return (
        <View>
            <View style={styles.Container}>
                <TouchableOpacity onPress={() => navigation.navigate('Count')} style={{ marginLeft: 20 }}>
                    <BoldText>Conta</BoldText>
                </TouchableOpacity>
                <AngleRightTouch onPress={() => navigation.navigate('Count')}>
                    <AngleRightImg  source={require('@icons/angle-right.png')} />
                </AngleRightTouch>
            </View>
            <View style={{ marginTop: 5, left: 20 }}>
                {state ? <Text style={{ fontWeight: '600', fontSize: 18 }}>{Money}</Text> : <NotView/>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})