import { BoldText } from '@styled/Scomponents'
import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, Image, TextInput, Modal, StyleSheet } from 'react-native'
import { api } from '@service/api'
import { ReactReduxContext, useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store/store'
import { requestMediaLibraryPermissionsAsync, launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { authUser } from '@redux/reducers/auth'
import { accountState } from '@redux/reducers/accountReducer'
import { setIsTrueOrFalse } from '@redux/reducers/ModalVisible'
import Colors from 'types/colors'
import { setAtt } from '@redux/reducers/att'


export default function AccountData() {

    const modal = useSelector((state: RootState) => state.ModalVisible)
    const att = useSelector((state: RootState) => state.Att)
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
    const [created, setIsCreated] = useState<boolean>(false)

    const linkImage = `${api.defaults.baseURL}/files/${user.avatar}`

    useEffect(() => {
        async function Permisson() {
            const { status } = await requestMediaLibraryPermissionsAsync()
        }
        Permisson()

        async function checkAccountExist() {
            const response = await api.get('/account')

            if(response.data == "Usuario nao encontrado") {
                return alert("Preencha os campos e aperte em criar na primeira vez.")   
            } else {
                return
            }
        }
        checkAccountExist()
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
            dispatch(accountState(response.data))
            await AsyncStorage.setItem("@nubankapp:userInfos", JSON.stringify(response.data))
        } catch (error) {
            console.log(error)
        }
    }

    async function createAccount() {

        if (amount == null || amount == "") {
            return alert("Preencha todos os campos para criar")
        }

        if (invoiceAmount == null || invoiceAmount == "") {
            return alert("Preencha todos os campos para criar")
        }

        if (paymentData == null || paymentData == "") {
            return alert("Preencha todos os campos para criar")
        }

        if (invoiceClosing == null || invoiceClosing == "") {
            return alert("Preencha todos os campos para criar")
        }

        if (creditCard == null || creditCard == "") {
            return alert("Preencha todos os campos para criar")
        }

        if (loan == null || loan == "") {
            return alert("Preencha todos os campos para criar")
        }

        const response = await api.post('/account', {
            amount: amount !== null ? Number(amount) : 0,
            invoiceAmount: invoiceAmount !== null ? Number(invoiceAmount) : 0,
            paymentData: paymentData !== null ? Number(paymentData) : 0,
            invoiceClosing: invoiceClosing !== null ? Number(invoiceClosing) : 0,
            creditCard: creditCard !== null ? Number(creditCard) : 0,
            loan: loan !== null ? Number(loan) : 0,
        })

        try {
            dispatch(setIsTrueOrFalse(!modal))
            dispatch(setAtt(!att))
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
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.fontInput}>Saldo da conta: </Text>
                    <TextInput style={styles.input} keyboardType='number-pad' onChangeText={(t) => setAmount(t)} placeholder='ex: 4500' />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.fontInput}>Valor da fatura: </Text>
                    <TextInput style={styles.input} keyboardType='number-pad' onChangeText={(t) => setInvoiceAmount(t)} placeholder='ex: 855.67' />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.fontInput}>Fechamento da fatura: </Text>
                    <TextInput style={styles.input} keyboardType='number-pad' onChangeText={(t) => setInvoiceClosing(t)} placeholder='ex: 13' />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.fontInput}>Pagamento da fatura: </Text>
                    <TextInput style={styles.input} keyboardType='number-pad' onChangeText={(t) => setPaymentData(t)} placeholder='ex: 20' />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.fontInput}>Cartao de credito: </Text>
                    <TextInput style={styles.input} keyboardType='number-pad' onChangeText={(t) => setCreditCard(t)} placeholder='ex: 3000' />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.fontInput}>Emprestimo: </Text>
                    <TextInput style={styles.input} keyboardType='number-pad' onChangeText={(t) => setLoan(t)} placeholder='ex: 10000' />
                </View>
                <TouchableOpacity style={styles.button} onPress={async () => {
                    await updateInfos()
                    dispatch(setIsTrueOrFalse(!modal))
                    dispatch(setAtt(!att))
                }}>
                    <Text style={{color: 'white', fontWeight: '500'}}>Atualizar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={async () => {
                    await createAccount()
                }}>
                    <Text style={{color: 'white', fontWeight: '500'}}>Criar</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{marginTop: 30, backgroundColor: `${Colors.roxo}`, marginBottom: 10, padding: 5, borderRadius: 10}} onPress={async () => {
                    await AsyncStorage.removeItem("@nubankapp:token")
                    await AsyncStorage.removeItem("@nubankapp:user")
                    await AsyncStorage.removeItem("@nubankapp:userInfos")
                    dispatch(authUser({}))
                    dispatch(accountState({}))
                }}>
                    <Text style={{color: 'white'}}>Sair da conta</Text>
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
    },
    input: {
        padding: 2
    },
    fontInput: {
        fontWeight: '500'
    },
    button: {
        backgroundColor: `${Colors.roxo}`,
        marginTop: 15,
        width: 100,
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        alignSelf: 'center'
    }
})