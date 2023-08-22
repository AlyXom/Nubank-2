import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamsList = {
    Home: undefined,
    Account: {
        name: string
    },
    Count: undefined
}

export type PropsNavigation = NativeStackScreenProps<RootStackParamsList>