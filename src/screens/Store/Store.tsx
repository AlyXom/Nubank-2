import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Header, Container, ProfileView, ProfileImage } from '@styled/Scomponents'
import HeaderIcons from '@components/HeaderIcons/HeaderIcons'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { UserInterface } from '@redux/reducers/auth'
import { RootState } from '@redux/store/store'
import { api } from '@service/api'
import { setIsTrueOrFalse } from '@redux/reducers/ModalVisible'

export default function Store() {

    const { navigate } = useNavigation()
    const dispatch = useDispatch()
    const userInfos: UserInterface = useSelector((state: RootState) => state.Auth)
    const state = useSelector((state: RootState) => state.ModalVisible)
    const linkImage = `${api.defaults.baseURL}/files/${userInfos.user.avatar}`

    return (
        <Container>
            <Header>
                <ProfileView>
                    <TouchableOpacity onPress={() => dispatch(setIsTrueOrFalse(!state))}>
                        {userInfos.user.avatar ? <ProfileImage source={{ uri: linkImage }} /> : <ProfileImage source={require("@icons/defaultProfile.jpg")} />}
                    </TouchableOpacity>
                    <HeaderIcons />
                </ProfileView>
            </Header>
        </Container>
    )
}