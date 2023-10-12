import { BoldText } from '@styled/Scomponents'
import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native'
import { api } from '@service/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store/store'
import { requestMediaLibraryPermissionsAsync, launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker"



export default function AccountData() {

    const [selectedImage, setSelectedImage] = useState()
    const { user } = useSelector((state: RootState) => state.Auth)

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

        if(!result.canceled) {
            
        }
    }

    return (
        <View style={{alignItems: 'center'}}>
            <BoldText style={{marginBottom: 20}}>Alterar as informações</BoldText>
            <View>
                <TouchableOpacity onPress={() => pickImage()}>
                    <Image style={{width: 100, height: 100, borderRadius: 50 }} source={{uri: `${api.defaults.baseURL}/files/${user.avatar}`}}/>
                </TouchableOpacity>
            </View>
            <View>

            </View>
        </View>
    )
}