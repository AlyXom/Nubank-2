import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BoxesImage, BoxesView } from '@styled/Scomponents'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store/store'
import MiniNotView from '@components/MiniNotView/MiniNotView'

export default function Boxes() {

    const { navigate } = useNavigation()
    const state = useSelector((state: RootState) => state.EyeState)

    return (
        <View style={{ flexDirection: 'row' }}>
            <View>
                <BoxesView onPress={() => undefined}>
                    <View>
                        <BoxesImage style={{ tintColor: '#1460b8' }} source={require('@icons/cost.png')} />
                    </View>
                </BoxesView>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontWeight: '500' }}>Caixinhas</Text>
                    {state ? <Text style={{ fontWeight: '500', fontSize: 13 }}>R$ 00,00</Text> : <MiniNotView />}
                </View>
            </View>
            <View>
                <BoxesView onPress={() => undefined}>
                    <View>
                        <BoxesImage style={{ tintColor: '#1460b8', width: 30, height: 30 }} source={require('@icons/signal.png')} />
                    </View>
                </BoxesView>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontWeight: '500' }}>Investimentos</Text>
                    {state ? <Text style={{ fontWeight: '500', fontSize: 13 }}>R$ 00,00</Text> : <MiniNotView />}
                </View>
            </View>
            <View>
                <BoxesView onPress={() => undefined}>
                    <View>
                        <BoxesImage style={{ tintColor: '#1460b8', width: 35, height: 35 }} source={require('@icons/cripto.png')} />
                    </View>
                </BoxesView>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontWeight: '500' }}>Cripto</Text>
                    {state ? <Text style={{ fontWeight: '500', fontSize: 13 }}>R$ 00,00</Text> : <MiniNotView />}
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    TextView: {
        width: '100%',
        alignItems: 'center',
    }
})