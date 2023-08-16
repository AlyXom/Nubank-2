import styled from "styled-components/native";
import Colors from "types/colors";

export const Container = styled.View`
    flex: 1;
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
    font-size: 19px;
    font-weight: 500;
`