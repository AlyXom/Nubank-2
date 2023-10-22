import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Header, Container, ProfileView, ProfileImage } from '@styled/Scomponents'
import HeaderIcons from '@components/HeaderIcons/HeaderIcons'
import Cont from '@components/Cont/Cont'
import ItensRoll from '@components/ItensRoll/ItensRoll'
import MyCards from '@components/MyCards/MyCards'
import InfosCard from '@components/Infoscard/InfosCard'
import InvoiceAmount from '@components/InvoiceAmount/InvoiceAmount'
import { LineView } from '@styled/Scomponents'
import BankLoan from '@components/BankLoan/BankLoan'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@redux/store/store'
import { setIsTrueOrFalse } from '@redux/reducers/ModalVisible'
import Config from '@screens/ConfigScreen/Config'
import { UserInterface, authUser } from '@redux/reducers/auth'
import { Account, accountState } from '@redux/reducers/accountReducer'
import { api } from '@service/api'
import AsyncStorage from '@react-native-async-storage/async-storage'


interface userInfos {
    name?: string,
    email?: string
    avatar?: string
}

const MyImage: number = require('@icons/credit-card.png')

export default function Home() {

    const state = useSelector((state: RootState) => state.ModalVisible)
    const att = useSelector((state: RootState) => state.Att)
    const userInfos: UserInterface = useSelector((state: RootState) => state.Auth)
    const accountInfos = useSelector((state: RootState) => state.Account)
    const dispatch = useDispatch()
    const [data, getData] = useState<Account>({})
    const [cache, getCache] = useState<Account>({})
    const [userCache, getUserCache] = useState<userInfos>({})
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const linkImage = `${api.defaults.baseURL}/files/${userInfos.user.avatar}`

    useEffect(() => {

        async function accounfInfos() {
            const response = await api.get('/account')
            const obj = response.data

            if (obj == "Usuario nao encontrado") {
                dispatch(setIsTrueOrFalse(!state))
            }

            getData(obj)
            dispatch(accountState(obj))
            setIsLoading(true)
            AsyncStorage.setItem("@nubankapp:userInfos", JSON.stringify(obj))

        }
        accounfInfos()
    

    }, [att])

    return (
        <Container showsVerticalScrollIndicator={false}>
            <StatusBar style='auto' />
            <Header>
                <ProfileView>
                    <TouchableOpacity onPress={() => dispatch(setIsTrueOrFalse(!state))}>
                        {userInfos.user.avatar ? <ProfileImage source={{uri: linkImage }} /> : <ProfileImage source={require("@icons/defaultProfile.jpg")}/>}
                    </TouchableOpacity>
                    {isLoading ? <Text></Text> : <Text style={{color: 'white'}}>Carregando...</Text>}
                    <HeaderIcons />
                </ProfileView>
                <View style={{ marginTop: 25, marginBottom: 24 }}>
                    <Text style={{ fontSize: 18, marginLeft: 22, color: 'white', fontWeight: '500' }}>Olá, {userInfos.user.name ?? userCache.name}</Text>
                </View>
            </Header>
            <Cont money={data.amount ?? 0} />
            <ItensRoll />
            <MyCards title='Meus cartões' Img={MyImage} />
            <InfosCard />
            <LineView></LineView>
            <InvoiceAmount closing={data.invoice_closing ??  0} paymentData={data.payment_data ?? 0} />
            <LineView></LineView>
            <BankLoan />
            <LineView></LineView>
            <View style={{ marginTop: 85 }}></View>
            <Config />
        </Container>
    )
}