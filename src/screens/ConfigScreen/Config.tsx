import { setIsTrueOrFalse } from '@redux/reducers/ModalVisible'
import { RootState } from '@redux/store/store'
import { ModalView, ModalContainer } from '@styled/Scomponents'
import React from 'react'
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import AccountData from '@components/AccountData/AccountData'

export default function Config() {

    const state = useSelector((state: RootState) => state.ModalVisible)
    const dispatch = useDispatch()

    return (
        <Modal
            animationType='slide'
            visible={state}
            transparent={true}>
            <ModalView>
                <View style={{marginTop: 20, marginLeft: 20}}>
                    <TouchableOpacity onPress={() => dispatch(setIsTrueOrFalse(!state))}>
                        <Image style={{width: 20, height: 20}} source={require('@icons/close.png')}/>
                    </TouchableOpacity>
                </View>
                <ModalContainer>
                    <AccountData/>
                </ModalContainer>
            </ModalView>
        </Modal>
    )
}