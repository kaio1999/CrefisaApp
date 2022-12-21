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
  color: #1195a2;
  font-weight: 400;
  font-size: 24px;
  text-align: left;
  margin: 25px 0;
  padding: 0 25px;
`;

export const Text = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #656e73;
  text-align: left;
  padding: 10px 25px;
  margin: 0px 10px;
`;

export const ButtonReturn = styled.TouchableOpacity`
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

export const BoxCard = styled.View`
  background: ${({ background }: any) => (background ? background : "#FFF")};
  border:${({ borderColor }: any) =>
    borderColor ? `1px solid ${borderColor}` : "1px solid #FFF"}
  border-radius: 8px;
  width: 120px;
  height: 84px;
  align-items: center;
  justify-content: center
  margin: 0px 10px;
  shadow-color: #000;
  shadow-offset: {width: 10, height: 10};
  shadow-opacity: 0.1;
  shadow-radius: 2;
  elevation: 10;
`;

export const Table = styled.View`
  border: 1px solid #9FB2BC;
  margin: 20px 25px;
  flex: 1
`;

export const HeaderTable = styled.View`
  background: #4a5b64;
  flex-direction: row;
`;

export const TextHeader = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  padding-left: 25px;
  text-align: end;
  flex: 1;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Tax = styled.Text`
  flex: 1;
  padding-left: 25px;
  padding-top: 2px;
  padding-bottom: 2px;
  font-weight: 400;
  color: #4A5B64;
  font-size: 10px;
`;
