import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";

import * as S from "./Faturamento.style";

const Faturamento = () => {

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
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="handled">
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
          <S.Content>
            <S.Image source={require("../../Images/img/dinheiro.png")} />
            <S.Title>
              Qual é o faturamento mensal estimado na maquininha Crefisa Pay?
            </S.Title>
            <S.Text style={{ marginTop: 10 }}>
              Digite o valor de faturamento via crédito e débito e vamos indicar
              o melhor plano
            </S.Text>
            <View style={{ marginVertical: 20 }}>
              <View style={{ paddingHorizontal: 20 }}>
                <S.Input
                  borderColor="#C4C4C4"
                  required
                  placeholderTextColor="#9FB2BC"
                  keyboardType="numeric"
                  value={moneyValue(value)}
                  placeholder="R$ 0,00"
                  onChangeText={(text) => {
                    setValue(floatValue(text));
                  }}
                />
                <S.ButtonContinue
                  background={`${value ? "#1195a2" : "#E5E5E5"}`}
                >
                  <Text
                    disabled={!value}
                    style={{
                      color: value ? "#FFF" : "#C4C4C4",
                      textAlign: "center",
                    }}
                  >
                    Continuar
                  </Text>
                </S.ButtonContinue>
              </View>
            </View>
          </S.Content>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Faturamento;
