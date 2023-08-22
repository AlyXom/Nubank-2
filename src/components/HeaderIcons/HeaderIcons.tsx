import React, { useState } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { IconsImage } from '@styled/Scomponents'
import { useDispatch } from 'react-redux'
import { setIsTrueOrFalse } from '@redux/reducers/stateReducer'

const openEye = require('@icons/eye_open.png')
const closeEye = require('@icons/eye_close.png')

export default function HeaderIcons() {
    const dispatch = useDispatch()
    const [isEyeOpen, setEye] = useState(true)

    return (
        <View style={styles.IconsContainer}>
            <TouchableOpacity onPress={ async () => {
                await setEye(!isEyeOpen)
                await dispatch(setIsTrueOrFalse(!isEyeOpen))
            }}>
                <IconsImage style={styles.colorIcon} source={isEyeOpen ? openEye : closeEye} />
            </TouchableOpacity>
            <TouchableOpacity>
                <IconsImage style={styles.colorIcon} source={require('@icons/help.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <IconsImage style={styles.colorIcon} source={require('@icons/user-add.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    IconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        marginRight: 10
    },
    colorIcon: {
        tintColor: 'white',
    }
})