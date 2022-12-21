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

import * as S from "./ChipConfirm.style";

const ChipConfirm = () => {
  const [selected, setSelected] = React.useState<any>();

  const optionsDays = [
    {
      img: require("../../Images/img/claro.png"),
      operator: "Claro",
      id: 0,
    },
    {
      img: require("../../Images/img/claro.png"),
      operator: "Tim",
      id: 1,
    },
    {
      img: require("../../Images/img/vivo.png"),
      operator: "Vivo",
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
          <S.Image source={require("../../Images/img/chip-icon.png")} />
          <S.Title>
            Escolha a operadora do chip incluso na sua maquininha:
          </S.Title>
          <View style={{ marginVertical: 20 }}>
            <View style={{ height: "90%" }}>
              <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "baseline" }}>
                {optionsDays.map((item) => {
                  return (
                    <View
                      key={item.id}
                      style={{
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Image style={{ marginVertical: 10 }} source={item.img} />
                      <Text
                        style={{
                          color: "#656E73",
                          fontSize: 16,
                          fontWeight: "400",
                          marginBottom: 10
                        }}
                      >
                        {item.operator}
                      </Text>
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
                    </View>
                  );
                })}
              </View>
              <View
                style={{
                  marginTop: "auto",
                  paddingHorizontal: 25,
                  paddingVertical: 30,
                }}
              >
                <S.Text style={{ marginTop: 10 }}>
                  <Text style={{ fontWeight: "bold" }}>Obs:</Text>O chip será
                  incluso na sua entrega sem valor adicional
                </S.Text>
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

export default ChipConfirm;
