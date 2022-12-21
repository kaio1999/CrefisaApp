import styled from "styled-components/native";

export const Image = styled.Image`
  width: 23px;
  height: 26px;
  margin-left: 25px;
  margin-top: 20px;
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
  margin-bottom: 10px;
  text-align: left;
  line-height: 25px;
`;

export const ButtonContinue = styled.TouchableOpacity`
  background: ${({ background }: any) => background && background};
  font-weight: 700;
  font-size: 16px;
  padding: 15px 35px;
  margin: 0 25px;
  border-radius: 8px;
  margin-top: ${({marginTop} : any) => marginTop && marginTop};
`;

export const Alert = styled.View`
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background: #f6f6f6;
  border-radius: 8px;
  flex-direction: row;
  margin: 10px 25px;
  transition: all 1s ease-in-out;
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

export const BoxCount = styled.View`
  margin: 0 20px;
  background: #fff;
  box-shadow: 0px 2px 8px rgba(6, 14, 30, 0.23);
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
`;

export const TitleChoice = styled.Text`
  color: #1195a2;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;

export const ImageMachine = styled.Image`
  width: 116px;
  height: 78px;
  margin: 10px 0;
`;

export const Counter = styled.View`
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 10px 19px;
  flex-direction: row;
  align-items: center;
`;

export const Operation = styled.Text`
  color: ${({ color }: any) => color && color};
  font-size: 20px;
  font-weight: 700;
`;

export const TextAlert = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: #656E73;
`;
