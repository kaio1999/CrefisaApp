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
import * as S from "./ConfirmPlan.style";

const PlanConfirmationUser = () => {
  const [email, setEmail] = React.useState<string>("");
  const [openFirst, setOpenFirst] = React.useState<boolean>(false);
  const [openSecond, setOpenSecond] = React.useState<boolean>(false);
  const [openThird, setOpenThird] = React.useState<boolean>(false);

  const paymentMethod = true;

  const TaxPaymentByMethod = [
    {
      product: "Débito",
      installment: "-",
      tax: "1,19%",
    },
    {
      product: "Crédito á vista",
      installment: "-",
      tax: "3,37%",
    },
    {
      product: "",
      installment: 2,
      tax: "4,02%",
    },
    {
      product: "",
      installment: 3,
      tax: "4,78%",
    },
    {
      product: "",
      installment: 4,
      tax: "5,54%",
    },
    {
      product: "",
      installment: 5,
      tax: "6,31%",
    },
    {
      product: "Crédito",
      installment: 6,
      tax: "7,09%",
    },
    {
      product: "Parcelado",
      installment: 7,
      tax: "8,05%",
    },
    {
      product: "",
      installment: 8,
      tax: "8,84%",
    },
    {
      product: "",
      installment: 9,
      tax: "9,64%",
    },
    {
      product: "",
      installment: 10,
      tax: "10,45%",
    },
    {
      product: "",
      installment: 11,
      tax: "11,27%",
    },
  ];

  const renderItem = ({ item }: PropsTax) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <S.Tax>{item?.product}</S.Tax>
        <S.Tax>{item?.installment}</S.Tax>
        <S.Tax>{item.tax}</S.Tax>
      </View>
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
              <S.Title>Importante!</S.Title>
              <S.Text>
                Se o valor de faturamento médio informado não for compatível ao
                valor real, o plano será reajustado automaticamente
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
                Deseja continuar?
              </Text>
            </View>
            <Image
              style={{ position: "absolute", top: 120, left: 25 }}
              source={require("../../Images/img/alert.png")}
            />
          </View>

          {/* <S.Table>
              <S.HeaderTable>
                <S.TextHeader>Produto</S.TextHeader>
                <S.TextHeader>Parcela</S.TextHeader>
                <S.TextHeader>Taxa</S.TextHeader>
              </S.HeaderTable>
              <View style={{ marginVertical: 10 }}>
                <FlatList data={TaxPaymentByMethod} renderItem={renderItem} />
              </View>
            </S.Table> */}
          <View style={{ marginBottom: 35, backgroundColor: "#F6F6F6",paddingHorizontal: 25, paddingVertical: 30 }}>
            <TouchableOpacity>
              <Text style={{ color: "#1195A2", fontSize: 16, fontWeight: "700", textAlign: "center" }}>Corrigir valor informado</Text>
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
        </S.Content>
      </View>
    </SafeAreaView>
  );
};

export default PlanConfirmationUser;
