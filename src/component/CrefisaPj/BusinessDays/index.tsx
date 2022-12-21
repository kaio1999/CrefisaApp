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

import * as S from "./BusinessDays.style";

const BusinessDays = () => {
  const [selected, setSelected] = React.useState<any>();

  const optionsDays = [
    {
      days: "Segunda a sexta",
      id: 0,
    },
    {
      days: "Segunda a sábado",
      id: 1,
    },
    {
      days: "Segunda a domingo",
      id: 2,
    },
  ];

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
          <S.Image source={require("../../Images/img/empresa.png")} />
          <S.Title>Quais são os dias de funcionamento do seu negócio?</S.Title>
          <S.Text style={{ marginTop: 10 }}>
            Selecione os dias da semana em que o seu estabelecimento está
            aberto:
          </S.Text>
          <View style={{ marginVertical: 20 }}>
            <View style={{ height: "90%" }}>
              {optionsDays.map((item) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 25,
                      marginVertical: 10,
                    }}
                  >
                    <TouchableOpacity onPress={() => setSelected(item.id)}>
                      <View
                        style={{
                          width: 18,
                          height: 18,
                          borderWidth: 1,
                          borderRadius: 15,
                          justifyContent: "center",
                        }}
                      >
                        {selected === item.id && (
                          <View
                            style={{
                              width: 10,
                              height: 10,
                              backgroundColor: "#1195A2",
                              borderRadius: 10,
                              alignSelf: "center",
                            }}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: "#656E73",
                        fontSize: 16,
                        fontWeight: "400",
                        marginBottom: 5,
                        marginLeft: 10,
                      }}
                    >
                      {item.days}
                    </Text>
                  </View>
                );
              })}
              <View
                style={{
                  marginTop: "auto",
                  paddingHorizontal: 25,
                  paddingVertical: 30,
                }}
              >
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

export default BusinessDays;
