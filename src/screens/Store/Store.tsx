import React from 'react'
import { View, Text } from 'react-native'
import { Header, Container, ProfileView, ProfileImage } from '@styled/Scomponents'
import HeaderIcons from '@components/HeaderIcons/HeaderIcons'
import { useNavigation } from '@react-navigation/native'

export default function Store() {

    const { navigate } = useNavigation()
    
    return (
        <Container>
            <Header>
                <ProfileView>
                    <Text></Text>
                    <HeaderIcons />
                </ProfileView>
            </Header>
            <Text>Nada aqui</Text>
        </Container>
    )
}