import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import * as S from "./Payment.style";

const Payment = () => {
  const [email, setEmail] = React.useState<string>("");
  const [openFirst, setOpenFirst] = React.useState<boolean>(false);
  const [openSecond, setOpenSecond] = React.useState<boolean>(false);

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
            <S.Image source={require("../../Images/img/email.png")} />
            <S.Title>Escolha sua condição de recebimento:</S.Title>
            <View
              style={{
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderBottomColor: "#E5E5E5",
                borderTopColor: "#E5E5E5",
                paddingVertical: 10,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <S.Text>D + 1</S.Text>
                <TouchableOpacity onPress={() => setOpenFirst(!openFirst)}>
                  <Image
                    source={
                      !openFirst
                        ? require("../../Images/img/arrow-dow.png")
                        : require("../../Images/img/arrow-up.png")
                    }
                    style={{ marginRight: 25 }}
                  />
                </TouchableOpacity>
              </View>
              {openFirst && (
                <View style={{ marginHorizontal: 25, marginVertical: 10 }}>
                  <Text style={{ fontSize: 16, color: "#656E73" }}>
                    No modo de recebimento em D+1, o pagamento é efetuado no dia
                    posterior a realização da transação de venda.
                  </Text>
                  <TouchableOpacity style={{ marginVertical: 15 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#1195A2",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      confira as taxas por bandeira {">"}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#E5E5E5",
                borderTopColor: "#E5E5E5",
                paddingVertical: 10,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <S.Text>Conforme vencimento da parcela</S.Text>
                <TouchableOpacity onPress={() => setOpenSecond(!openSecond)}>
                  <Image
                    source={
                      !openSecond
                        ? require("../../Images/img/arrow-dow.png")
                        : require("../../Images/img/arrow-up.png")
                    }
                    style={{ marginRight: 25 }}
                  />
                </TouchableOpacity>
              </View>
              {openSecond && (
                <View style={{ marginHorizontal: 25, marginVertical: 10 }}>
                  <Text style={{ fontSize: 16, color: "#656E73" }}>
                    Nessa condição o pagamento do produto débito é realizado no
                    dia posterior a transação de venda, do produto crédito é
                    realizado 31 dias após a realização da venda e no Crédito
                    parcelado é realizado do dia do vencimento de cada parcela
                  </Text>
                  <TouchableOpacity style={{ marginVertical: 15 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#1195A2",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      confira as taxas por bandeira {">"}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <S.ButtonContinue
              background={`${
                email && email?.includes("@") ? "#1195a2" : "#E5E5E5"
              }`}
            >
              <Text
                disabled={!email && !email?.includes("@")}
                style={{
                  color: email && email?.includes("@") ? "#FFF" : "#C4C4C4",
                  textAlign: "center",
                }}
              >
                Continuar
              </Text>
            </S.ButtonContinue>
          </S.Content>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;
