import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { BoldText } from '@styled/Scomponents'
import Colors from 'types/colors'

export default function Insurance({Img, Title}: {Img: number, Title: string}) {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <Image style={{ width: 23, height: 23, marginLeft: 10 }} source={Img} />
                <BoldText style={{ marginLeft: 10, fontSize: 16 }}>{Title}</BoldText>
                <TouchableOpacity style={{marginLeft: 130}}>
                    <Text style={{fontWeight: '600', color: Colors.roxo}}>Conhecer</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 13,
        backgroundColor: Colors.cinza,
        width: '92%',
        height: 45,
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})