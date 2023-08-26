import MyTabBarProps from 'types/MyTabBarProps'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function TabBar({ state, descriptors, navigation }: MyTabBarProps) {

    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.container}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1 }}
                            key={options.tabBarIcon}
                        >
                            <View>
                                <View style={[styles.tab, {backgroundColor: isFocused ? 'rgba(143, 42, 189, 0.2)' : null}]}>
                                    <MaterialIcons name={options.tabBarIcon} size={35} color={isFocused ? "#8f2abd" : "#535353"} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 200,
        height: 65,
        position: 'absolute',
        bottom: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        backgroundColor: 'rgba(255,255,255,0.9)'
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 60,
        width: 60,
        marginLeft: 3,
    }
})