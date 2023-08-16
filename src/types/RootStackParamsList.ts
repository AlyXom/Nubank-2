import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamsList = {
    Home: undefined,
    Account: {
        name: string
    },
    Count: undefined
}

export type PropsNavigation = NativeStackScreenProps<RootStackParamsList>