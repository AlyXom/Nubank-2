import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Header, Container, ProfileView, ProfileImage, BoldText, LineView } from '@styled/Scomponents'
import HeaderIcons from '@components/HeaderIcons/HeaderIcons'
import { useNavigation } from '@react-navigation/native'
import Boxes from '@components/Boxes/Boxes'
import Insurance from '@components/Insurance/Insurance'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@redux/store/store'
import { UserInterface } from '@redux/reducers/auth'
import { api } from '@service/api'
import { setIsTrueOrFalse } from '@redux/reducers/ModalVisible'

export default function Money() {

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
                    {userInfos.user.avatar ? <ProfileImage source={{uri: linkImage }} /> : <ProfileImage source={require("@icons/defaultProfile.jpg")}/>}
                    </TouchableOpacity>
                    <HeaderIcons />
                </ProfileView>
            </Header>
            <BoldText style={{marginLeft: 20, marginTop: 30, marginBottom: 15}}>Acompanhe seu dinheiro</BoldText>
            <Boxes />
            <LineView></LineView>
            <BoldText style={{marginTop: 10, marginLeft: 20}}>Seguros</BoldText>
            <Insurance Img={require('@icons/heart.png')} Title='Seguro de Vida'/>
            <Insurance Img={require('@icons/smartphone.png')} Title='Seguro Celular'/>
            <Insurance Img={require('@icons/couple.png')} Title='Seguro Família'/>
        </Container>
    )
}