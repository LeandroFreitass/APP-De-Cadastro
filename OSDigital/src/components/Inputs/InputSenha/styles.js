import styled from "styled-components";
import { theme } from "../../global/styles/theme";


export const InputArea = styled.View`
    flex-Direction: row;
    width: 270px;
    background-Color:#ffff;
    border-Radius: 5px;
    height: 50px;
    align-Items: center;
    margin: 50px;

`
export const Input = styled.TextInput`
    width: 65%;
    height: 50px;
    padding: 8px;
    font-Size: 18px;
    border-bottom-color: #29ABE2;
    border-bottom-width: 1px;
    color: #000;
    

`
export const TouchIcon = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    justify-Content: center;
    align-Items: center;
    border-bottom-width: 1px;
    border-bottom-color: #29ABE2;


`
export const IconWrapper = styled.View`
    width: 50px;
    height: 50px;
    justify-Content: center;
    align-Items: center;
    border-bottom-width: 1px;
    border-bottom-color: #29ABE2


`
export const ImageIcon = styled.Image`
    width: 20px;
    height: 20px;
    right: 14px;

`
export const ImageText = styled.Text`
  color:#29ABE2;
  right: 8px;
  margin: 2px;

`