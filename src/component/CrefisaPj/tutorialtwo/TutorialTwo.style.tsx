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
  padding: 15px 30px;
`;

export const Title = styled.Text`
  color: #4a5b64;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
`;

export const Text = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: #4a5b64;
  margintop: 20px;
  text-align: center;
  padding: 0 18px;
`;

export const ButtonDrop = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #1195a2;
`;

export const ButtonContinue = styled.TouchableOpacity`
  background: #1195a2;
  font-weight: 700;
  font-size: 16px;
  padding: 15px 35px;
  border-radius: 8px;
`;
