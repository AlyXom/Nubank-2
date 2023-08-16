import React from 'react'
import { View, Text } from 'react-native'
import { PropsNavigation } from 'types/RootStackParamsList'

export default function Account({navigation, route}: PropsNavigation){


    return (
        <View>
            <Text>{route.params.name}</Text>
        </View>
    )
}