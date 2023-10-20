import { BoldText } from '@styled/Scomponents'
import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, Image, TextInput, Modal, StyleSheet } from 'react-native'
import { api } from '@service/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store/store'
import { requestMediaLibraryPermissionsAsync, launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { authUser } from '@redux/reducers/auth'
import { accountState } from '@redux/reducers/accountReducer'
import { setIsTrueOrFalse } from '@redux/reducers/ModalVisible'


export default function AccountData() {

    const formData = new FormData()
    const modal = useSelector((state: RootState) => state.ModalVisible)
    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState(true)
    const { user } = useSelector((state: RootState) => state.Auth)
    const account = useSelector((state: RootState) => state.Account)
    const [amount, setAmount] = useState<string>()
    const [invoiceAmount, setInvoiceAmount] = useState<string>()
    const [creditCard, setCreditCard] = useState<string>()
    const [paymentData, setPaymentData] = useState<string>()
    const [invoiceClosing, setInvoiceClosing] = useState<string>()
    const [loan, setLoan] = useState<string>()

    const linkImage = `${api.defaults.baseURL}/files/${user.avatar}`

    useEffect(() => {
        async function Permisson() {
            const { status } = await requestMediaLibraryPermissionsAsync()

            console.log(status)
        }
        Permisson()
    }, [])

    async function pickImage() {
        const result = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images
        })

        if (!result.canceled) {
            const image = result.assets[0]
            const filename = image.uri.substring(
                image.uri.lastIndexOf('/') + 1,
                image.uri.length
            )
            const extend = filename.split('.')[1]
            const formData = new FormData()
            formData.append('avatar', JSON.parse(JSON.stringify({
                name: filename,
                uri: image.uri,
                type: 'image/' + extend,
            })))
            const response = await api.patch('users/avatar', formData)

            if (response.data) {
                dispatch(authUser(response.data))
                await AsyncStorage.setItem("@nubankapp:user", JSON.stringify(response.data))
            }

        }
    }

    async function updateInfos() {
        const response = await api.patch('/account', {
            amount: Number(amount),
            invoiceAmount: Number(invoiceAmount),
            paymentData: Number(paymentData),
            invoiceClosing: Number(invoiceClosing),
            creditCard: Number(creditCard),
            loan: Number(loan)
        })

        try {
            console.log(response.data)
            dispatch(accountState(response.data))
            await AsyncStorage.setItem("@nubankapp:userInfos", JSON.stringify(response.data))
        } catch (error) {
            console.log(error)
        }
    }

    async function createAccount() {
        const response = await api.post('/account', {
            amount: amount !== null ? Number(amount) : 0,
            invoiceAmount: invoiceAmount !== null ? Number(invoiceAmount) : 0,
            paymentData: paymentData !== null ? Number(paymentData) : 0,
            invoiceClosing: invoiceClosing !== null ? Number(invoiceClosing) : 0,
            creditCard: creditCard !== null ? Number(creditCard) : 0,
            loan: loan !== null ? Number(loan) : 0,
        })

        try {
            console.log(response.data)
            dispatch(accountState(response.data))
            await AsyncStorage.setItem("@nubankapp:userInfos", JSON.stringify(response.data))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <BoldText style={{ marginBottom: 20 }}>Alterar as informações</BoldText>
            <View>
                <TouchableOpacity onPress={() => pickImage()}>
                    {user.avatar ? <Image style={styles.image} source={{ uri: selectedImage ? linkImage : user.avatar }} /> : <Image style={styles.image} source={require("@icons/defaultProfile.jpg")} />}
                </TouchableOpacity>
            </View>
            <View>
                <TextInput keyboardType='number-pad' onChangeText={(t) => setAmount(t)} placeholder='Saldo na conta' />
                <TextInput keyboardType='number-pad' onChangeText={(t) => setInvoiceAmount(t)} placeholder='Fatura' />
                <TextInput keyboardType='number-pad' onChangeText={(t) => setInvoiceClosing(t)} placeholder='Fechamento da fatura' />
                <TextInput keyboardType='number-pad' onChangeText={(t) => setPaymentData(t)} placeholder='Vencimento da fatura' />
                <TextInput keyboardType='number-pad' onChangeText={(t) => setCreditCard(t)} placeholder='Cartao de credito' />
                <TextInput keyboardType='number-pad' onChangeText={(t) => setLoan(t)} placeholder='Emprestimo' />
                <TouchableOpacity onPress={async () => {
                    await updateInfos()
                    dispatch(setIsTrueOrFalse(!modal))
                }}>
                    <Text>Atualizar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={async () => {
                    await createAccount()
                    dispatch(setIsTrueOrFalse(!modal))
                }}>
                    <Text>Criar</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={async () => {
                    await AsyncStorage.removeItem("@nubankapp:token")
                    await AsyncStorage.removeItem("@nubankapp:user")
                    await AsyncStorage.removeItem("@nubankapp:userInfos")
                    dispatch(authUser({}))
                    dispatch(accountState({}))
                }}>
                    <Text>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    }
})