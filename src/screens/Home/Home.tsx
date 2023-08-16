import React from 'react'
import { Image, Text, View } from 'react-native'
import { Header, Container, ProfileView } from '@styled/Scomponents'
import { PropsNavigation } from 'types/RootStackParamsList'
import HeaderIcons from '@components/HeaderIcons/HeaderIcons'
import Cont from '@components/Cont/Cont'
import Data from '@data/Data'

const {name, amount, fatura} = Data

const image = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'


export default function Home({ navigation, route }: PropsNavigation) {
    return (
        <Container>
            <Header>
                <ProfileView>
                    <Image style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 10 }} source={{ uri: image }} />
                    <HeaderIcons/>
                </ProfileView>
                <View style={{marginTop: 28, marginBottom: 24}}>
                    <Text style={{fontSize: 18, marginLeft: 22, color: 'white', fontWeight: '500'}}>Olá, {name}</Text>
                </View>
            </Header>
            <Cont money={amount}/>
        </Container>
    )
}