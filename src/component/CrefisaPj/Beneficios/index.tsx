import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Switch,
  FlatList,
} from "react-native";

import * as S from "./Beneficios.style";

const Beneficios = () => {
  return (
    <SafeAreaView>
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
      <ScrollView>
        <View>
          <S.Content>
            <Image
              style={{ width: 252, height: 172, alignSelf: "center" }}
              source={require("../../Images/img/saving-money.png")}
            />
            <S.Title>Beneficios para sua empresa</S.Title>
            <View style={{ paddingHorizontal: 25 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <S.circle />
                <S.Text>
                  Isenção do aluguel de 1 máquina (R$69,90) quando faturar{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    acima de R$ 40.000,00
                  </Text>
                </S.Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <S.circle />
                <S.Text>
                  Isenção de aluguel de 2 equipamentos se faturar
                  <Text style={{ fontWeight: "bold" }}>
                    acima de R$ 120.000,00
                  </Text>
                </S.Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <S.circle />
                <S.Text>
                  Isenção de aluguel de 3 equipamentos se
                  <Text style={{ fontWeight: "bold" }}>
                    {" "}
                    domiciliado no Banco Crefisa{" "}
                  </Text>
                  e atingir
                  <Text style={{ fontWeight: "bold" }}>
                    {" "}
                    condição de faturamento acima
                  </Text>
                </S.Text>
              </View>
            </View>
          </S.Content>
          <S.ButtonContinue
            background="#1195a2"
          >
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Beneficios;
