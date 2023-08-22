import React from 'react'
import { Image, Text, View } from 'react-native'
import { Header, Container, ProfileView } from '@styled/Scomponents'
import Colors from 'types/colors'
import HeaderIcons from '@components/HeaderIcons/HeaderIcons'
import Cont from '@components/Cont/Cont'
import ItensRoll from '@components/ItensRoll/ItensRoll'
import Data from '@data/Data'
import MyCards from '@components/MyCards/MyCards'
import InfosCard from '@components/Infoscard/InfosCard'
import InvoiceAmount from '@components/InvoiceAmount/InvoiceAmount'
import { LineView } from '@styled/Scomponents'
import BankLoan from '@components/BankLoan/BankLoan'


const { name, amount } = Data

const image = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'


export default function Home() {

    return (
        <Container showsVerticalScrollIndicator={false}>
            <Header>
                <ProfileView>
                    <Image style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 15 }} source={{ uri: Data.avatar }} />
                    <HeaderIcons />
                </ProfileView>
                <View style={{ marginTop: 25, marginBottom: 24 }}>
                    <Text style={{ fontSize: 18, marginLeft: 22, color: 'white', fontWeight: '500' }}>Olá, {name}</Text>
                </View>
            </Header>
            <Cont money={amount} />
            <ItensRoll />
            <MyCards />
            <InfosCard />
            <LineView></LineView>
            <InvoiceAmount />
            <LineView></LineView>
            <BankLoan />
            <LineView></LineView>
        </Container>
    )
}