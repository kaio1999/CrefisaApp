import styled from "styled-components/native";

export const Image = styled.Image`
  width: 100%;
`;

export const Progress = styled.View`
  width: 110px;
  heigth: 8px;
  background: ${({ background }: any) => (background ? background : "#FFFFFF")};
  border-radius: 8px;
  position: relative;
  bottom: 30px;
`;

export const Content = styled.View`
  padding: 15px 0;
`;

export const Title = styled.Text`
  color: #4a5b64;
  font-weight: 700;
  font-size: 32px;
  text-align: left;
  margin: 10px 0;
  padding: 0 25px;
`;

export const Text = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: #4a5b64;
  margintop: 20px;
  text-align: left;
  line-height: 25px;
  padding: 0 25px;

`;

export const ButtonDrop = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #1195a2;
`;

export const ButtonContinue = styled.TouchableOpacity`
  background: ${({background} : string) => background ? background : '#E5E5E5'};
  font-weight: 700;
  font-size: 16px;
  padding: 15px 35px;
  border-radius: 8px;
  margin-bottom: 60px;
`;

export const Header = styled.View`
  background: #15baca;
  padding: 25px 20px;
  flex-direction: row;
  align-items: center;
`;

export const TitleHeader = styled.Text`
  margin: auto;
`;

export const Footer = styled.View`
  flexdirection: row;
  justifycontent: space-between;
  marginTop: auto;
  background: #F6F6F6;
  width: 100%;
`;
