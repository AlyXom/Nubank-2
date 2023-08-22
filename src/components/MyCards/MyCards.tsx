import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { BoldText } from '@styled/Scomponents'
import Colors from 'types/colors'

export default function MyCards() {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={{width: 20, height: 20, marginLeft: 10}} source={require('@icons/credit-card.png')}/>
            <BoldText style={{marginLeft: 10, fontSize: 16}}>Meus cartões</BoldText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: Colors.cinza,
        width: '92%',
        height: 45,
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})