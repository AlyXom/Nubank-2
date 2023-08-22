import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { ItensRollImage, ItensRollView, ItensText } from '@styled/Scomponents'

export default function ItensRoll() {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{alignItems: 'center', width: 100}}>
                    <ItensRollView>
                        <ItensRollImage source={require('@icons/icone-pix.png')} />
                    </ItensRollView>
                    <ItensText>Área Pix</ItensText>
                </View>
                <View style={{alignItems: 'center', width: 100}}>
                    <ItensRollView>
                        <ItensRollImage style={{width: 35, height: 35}} source={require('@icons/smartphone.png')} />
                    </ItensRollView>
                    <ItensText>Recarga de celular</ItensText>
                </View>
                <View style={{alignItems: 'center', width: 100}}>
                    <ItensRollView>
                        <ItensRollImage style={{width: 30, height: 30}} source={require('@icons/borrow.png')} />
                    </ItensRollView>
                    <ItensText>Pegar emprestado</ItensText>
                </View>
                <View style={{alignItems: 'center', width: 100}}>
                    <ItensRollView>
                        <ItensRollImage source={require('@icons/codigo-de-barras.png')} />
                    </ItensRollView>
                    <ItensText>Pagar</ItensText>
                </View>
                <View style={{alignItems: 'center', width: 100}}>
                    <ItensRollView>
                        <ItensRollImage style={{width: 35, height: 35}} source={require('@icons/send-money.png')} />
                    </ItensRollView>
                    <ItensText>Transferir</ItensText>
                </View>
                <View style={{alignItems: 'center', width: 100}}>
                    <ItensRollView>
                        <ItensRollImage source={require('@icons/demand.png')} />
                    </ItensRollView>
                    <ItensText>Cobrar</ItensText>
                </View>
                <View style={{alignItems: 'center', width: 100}}>
                    <ItensRollView>
                        <ItensRollImage source={require('@icons/cost.png')} />
                    </ItensRollView>
                    <ItensText>Caixinha</ItensText>
                </View>
                <View style={{alignItems: 'center', width: 100}}>
                    <ItensRollView>
                        <ItensRollImage style={{width: 35, height: 35}} source={require('@icons/deposity-money.png')} />
                    </ItensRollView>
                    <ItensText>Depositar</ItensText>
                </View>
                <View style={{alignItems: 'center', width: 100}}>
                    <ItensRollView>
                        <ItensRollImage source={require('@icons/signal.png')} />
                    </ItensRollView>
                    <ItensText>Investir</ItensText>
                </View>
                <View style={{alignItems: 'center', width: 100}}>
                    <ItensRollView>
                        <ItensRollImage source={require('@icons/worldwide.png')} />
                    </ItensRollView>
                    <ItensText>Transferir Internac.</ItensText>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 45,
    }
})