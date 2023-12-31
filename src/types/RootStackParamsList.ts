import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamsList = {
    Home: undefined,
    Account: {
        name: string
    },
    Count: undefined,
    Config: undefined,
    Box: undefined,
    Investment: undefined,
    Cripto: undefined,
    signup: undefined,
    login: undefined
}

export type PropsNavigation = NativeStackScreenProps<RootStackParamsList>