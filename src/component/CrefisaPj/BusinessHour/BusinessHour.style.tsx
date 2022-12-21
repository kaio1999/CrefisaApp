import styled from "styled-components/native";

export const Image = styled.Image`
  width: 26.25px;
  height: 20px;
  margin-left: 25px;
`;

export const Content = styled.View`
  padding: 15px 0;
`;

export const Title = styled.Text`
  color: #4a5b64;
  font-weight: 700;
  font-size: 18px;
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

export const ButtonContinue = styled.TouchableOpacity`
  background: ${({ background }: any) => background && background};
  font-weight: 700;
  font-size: 16px;
  padding: 15px 35px;
  border-radius: 8px;
  margin-top: 20px;
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

export const Input = styled.TextInput`
  height: 40px;
  padding: 10px;
  width: 100%;
  border: none;
  border-bottom-width: 1px;
  text-align: center;
  font-style: italic;
  color: #4a5b64;
  border-bottom-color: ${({ borderColor }: any) => borderColor && borderColor};
  outline: none;
`;

export const AdressBox = styled.View`
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 16px;
  margin: 0 25px;
`;
