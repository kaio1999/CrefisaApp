import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import * as S from "./enderecoMaquininha.style";

const EnderecoMaquininha = () => {
  const [value, setValue] = React.useState<any>();

  const floatValue = (text: string) => {
    text = text.replace(/[^0-9]/g, "");
    text = text ? text : "0";
    return Number.parseFloat(text.replace(/[^0-9]/g, "")) / 100;
  };

  const moneyValue = (value?: number) => {
    return (
      value?.toLocaleString("pt-br", { style: "currency", currency: "BRL" }) ??
      "R$ 0,00"
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Header>
        <Image
          style={{ width: 8, height: 15 }}
          source={require("../../Images/img/arrow.png")}
        />
        <S.TitleHeader
          style={{
            color: "#FFF",
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Solicitar Crefisa Pay
        </S.TitleHeader>
      </S.Header>
      <View>
        <S.Content style={{ height: "100%" }}>
          <S.Image source={require("../../Images/img/location.png")} />
          <S.Title>Confirme o seu endereço</S.Title>
          <S.Text style={{ marginTop: 10 }}>
            Vamos enviar a sua maquininha para o endereço abaixo, ele está
            correto?
          </S.Text>
          <Text
            style={{
              color: "#4A5B64",
              fontSize: 16,
              fontWeight: "700",
              paddingLeft: 25,
              paddingTop: 40,
            }}
          >
            Endereço cadastrado:
          </Text>
          <View style={{ marginVertical: 20 }}>
            <View style={{ justifyContent: "space-between", height:"85%" }}>
              <S.AdressBox>
                <Text
                  style={{
                    color: "#4A5B64",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  Rua Canadá, n°1009
                </Text>
                <Text
                  style={{
                    color: "#656E73",
                    fontSize: 16,
                    fontWeight: "400",
                    marginBottom: 5,
                  }}
                >
                  Jardim América -
                </Text>
                <Text
                  style={{
                    color: "#656E73",
                    fontSize: 16,
                    marginBottom: 25,
                    fontWeight: "400",
                  }}
                >
                  São Paulo - SP
                </Text>
                <Text
                  style={{
                    color: "#656E73",
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                >
                  CEP: 0000-000
                </Text>
              </S.AdressBox>
              <View
                style={{
                  backgroundColor: "#F6F6F6",
                  width: "100%",
                  paddingHorizontal: 25,
                  paddingVertical: 30,
                }}
              >
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "#1195A2",
                      fontSize: 16,
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    Esse não é o meu endereço comercial
                  </Text>
                </TouchableOpacity>
                <S.ButtonContinue background="#1195a2">
                  <Text
                    style={{
                      color: "#FFF",
                      textAlign: "center",
                    }}
                  >
                    Continuar
                  </Text>
                </S.ButtonContinue>
              </View>
            </View>
          </View>
        </S.Content>
      </View>
    </SafeAreaView>
  );
};

export default EnderecoMaquininha;
