import React from 'react'
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import { BoldText } from '@styled/Scomponents'
import Colors from 'types/colors'

export default function MyCards({Img, title}: {Img: number, title: string}) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={{width: 25, height: 25, marginLeft: 10}} source={Img}/>
            <BoldText style={{marginLeft: 10, fontSize: 16}}>{title}</BoldText>
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