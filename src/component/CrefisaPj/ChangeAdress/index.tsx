import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as S from "./ChangeAdress.style";

const ChangeAdress = () => {
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
        <S.Content style={{ justifyContent: "space-between", height: "100%" }}>
          <View>
            <Image source={require("../../Images/img/circleForm.png")} />
            <View
              style={{
                paddingLeft: 15,
                zIndex: 1,
                position: "relative",
                bottom: 85,
              }}
            >
              <S.Title>Mudança de endereço</S.Title>
              <S.Text>
                Para mudar o endereço cadastrado, você deve acessar o <Text style={{ fontWeight: "bold" }}>site da
                receita federal</Text> e apresentar um novo <Text style={{ fontWeight: "bold" }}>comprovante de endereço</Text>, em
                seguida, <Text style={{ fontWeight: "bold" }}>ligue na central de atendimento Crefisa</Text> (0800 273 3374)
                para informar a mudança.
              </S.Text>
            </View>
            <Image
              style={{ position: "absolute", top: 120, left: 25 }}
              source={require("../../Images/img/alert.png")}
            />
          </View>
          <View
            style={{
              marginBottom: 35,
              backgroundColor: "#F6F6F6",
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
        </S.Content>
      </View>
    </SafeAreaView>
  );
};

export default ChangeAdress;
