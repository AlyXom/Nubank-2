import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Header, Container, ProfileView, ProfileImage } from '@styled/Scomponents'
import HeaderIcons from '@components/HeaderIcons/HeaderIcons'
import Cont from '@components/Cont/Cont'
import ItensRoll from '@components/ItensRoll/ItensRoll'
import Data from '@data/Data'
import MyCards from '@components/MyCards/MyCards'
import InfosCard from '@components/Infoscard/InfosCard'
import InvoiceAmount from '@components/InvoiceAmount/InvoiceAmount'
import { LineView } from '@styled/Scomponents'
import BankLoan from '@components/BankLoan/BankLoan'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@redux/store/store'
import { setIsTrueOrFalse } from '@redux/reducers/ModalVisible'
import Config from '@screens/ConfigScreen/Config'

export const ProfilePhoto = require('../../userPhoto/foto.jpeg')

const { name, amount } = Data

const MyImage: number = require('@icons/credit-card.png')

export default function Home() {

    const { navigate } = useNavigation()
    const state = useSelector((state: RootState) => state.ModalVisible)
    const dispatch = useDispatch()

    return (
        <Container showsVerticalScrollIndicator={false}>
            <StatusBar style='auto' />
            <Header>
                <ProfileView>
                    <TouchableOpacity onPress={() => dispatch(setIsTrueOrFalse(!state))}>
                        <ProfileImage source={ProfilePhoto} />
                    </TouchableOpacity>
                    <HeaderIcons />
                </ProfileView>
                <View style={{ marginTop: 25, marginBottom: 24 }}>
                    <Text style={{ fontSize: 18, marginLeft: 22, color: 'white', fontWeight: '500' }}>Olá, {name}</Text>
                </View>
            </Header>
            <Cont money={amount} />
            <ItensRoll />
            <MyCards title='Meus cartões' Img={MyImage} />
            <InfosCard />
            <LineView></LineView>
            <InvoiceAmount />
            <LineView></LineView>
            <BankLoan />
            <LineView></LineView>
            <View style={{ marginTop: 85 }}></View>
            <Config />
        </Container>
    )
}