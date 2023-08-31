import React, { useState } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { IconsImage } from '@styled/Scomponents'
import { useDispatch, useSelector } from 'react-redux'
import { setIsTrueOrFalse } from '@redux/reducers/stateReducer'
import { RootState } from '@redux/store/store'

const openEye = require('@icons/eye_open.png')
const closeEye = require('@icons/eye_close.png')

export default function HeaderIcons() {

    const state = useSelector((state: RootState) => state.EyeState)
    const dispatch = useDispatch()
    return (
        <View style={styles.IconsContainer}>
            <TouchableOpacity onPress={ async () => {
                await dispatch(setIsTrueOrFalse(!state))
            }}>
                <IconsImage style={styles.colorIcon} source={ state ? openEye : closeEye} />
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