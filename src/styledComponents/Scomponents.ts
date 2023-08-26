import styled from "styled-components/native";
import Colors from "types/colors";

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${Colors.branco};
`;

export const Header = styled.View`
    background-color: ${Colors.roxo};
    width: 100%;
    height: auto;
`;

export const ProfileView = styled.View`
    margin-top: 40px;
    height: 50px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

export const IconsImage = styled.Image`
    width: 20px;
    height: 20px;
`

export const BoldText = styled.Text`
    font-size: 18px;
    font-weight: 500;
`

export const NotView = styled.Text`
    font-size: 17px;
    font-weight: 900;
`

export const ItensRollImage = styled.Image`
    width: 25px;
    height: 25px;
`

export const ItensRollView = styled.TouchableOpacity`
    margin-left: 25px;
    background-color: ${Colors.cinza};
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
`

export const AngleRightTouch = styled.TouchableOpacity`
    margin-right: 20px;
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
`

export const ButtonTouch = styled.TouchableOpacity`
    background-color: ${Colors.fatura};
    width: auto;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 9px;
    padding-right: 9px;
    align-items: center;
    border-radius: 20px;
    margin-right: 8px;
    justify-content: center;
`

export const AngleRightImg = styled.Image`
    width: 12px;
    height: 12px;
`

export const ItensText = styled.Text`
    margin-left: 25px;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    width: 100px;
`

export const LineView = styled.View`
    background-color: ${Colors.cinza};
    width: 100%;
    height: 2px;
    margin-top: 13px;
`

export const InvoiceView = styled.View`
    margin-left: 25px;
`

export const InvoiceAmount = styled.View`
    margin-top: 10px;
`

export const InvoiceText = styled.Text`
    color: grey;
    font-weight: 400;
    font-size: 16px;
`

export const InvoiceValue = styled.Text`
    font-size: 19px;
    font-weight: 600;
`