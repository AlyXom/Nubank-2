import React from 'react'
import { View, Text } from 'react-native'
import { Header, Container, ProfileView, ProfileImage } from '@styled/Scomponents'
import Data from '@data/Data'
import HeaderIcons from '@components/HeaderIcons/HeaderIcons'
import { useNavigation } from '@react-navigation/native'
import { ProfilePhoto } from '@screens/Home/Home'

export default function Store() {

    const { navigate } = useNavigation()
    
    return (
        <Container>
            <Header>
                <ProfileView>
                    <ProfileImage source={ProfilePhoto} />
                    <HeaderIcons />
                </ProfileView>
            </Header>
            <Text>Nada aqui</Text>
        </Container>
    )
}