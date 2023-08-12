import MyTabBarProps from 'types/MyTabBarProps'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function TabBar({ state, descriptors, navigation }: MyTabBarProps) {

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
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
                        >
                            <View>
                                <View>
                                    <MaterialIcons name={options.tabBarIcon} size={40} color={isFocused ? "#f0f" : "#000"} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
