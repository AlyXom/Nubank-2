import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Header, Container, ProfileView, ProfileImage, BoldText, LineView } from '@styled/Scomponents'
import Data from '@data/Data'
import HeaderIcons from '@components/HeaderIcons/HeaderIcons'
import { useNavigation } from '@react-navigation/native'
import Boxes from '@components/Boxes/Boxes'
import MyCards from '@components/MyCards/MyCards'
import Insurance from '@components/Insurance/Insurance'
import { ProfilePhoto } from '@screens/Home/Home'

export default function Money() {

    const { navigate } = useNavigation()

    return (
        <Container>
            <Header>
                <ProfileView>
                    <TouchableOpacity onPress={() => navigate('Config')}>
                        <ProfileImage source={ProfilePhoto} />
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