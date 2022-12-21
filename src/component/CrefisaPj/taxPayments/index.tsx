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

import * as S from "./TaxPayments.style";

export interface PropsTax {
  item: { product: string; installment: string | number; tax: string };
}

const TaxPayment = () => {
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
            <S.Title>
              {paymentMethod
                ? "Recebimento em D+1"
                : "Recebimento Conforme vencimento da parcela"}
            </S.Title>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#656E73",
                paddingLeft: 25,
                marginBottom: 25,
              }}
            >
              Confira as taxas por bandeira
            </Text>
            <ScrollView
              style={{ paddingLeft: 15 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity onPress={() => setOpenFirst(!openFirst)}>
                <S.BoxCard
                  background={openFirst && "#1195A2"}
                  border={openFirst && "#1195A2"}
                >
                  <Image
                    style={{ width: 45, height: 15 }}
                    source={require("../../Images/img/visa.png")}
                  />
                  <Text style={{ fontSize: 14, fontWeight: "700" }}>Visa</Text>
                </S.BoxCard>
              </TouchableOpacity>
              <TouchableOpacity>
                <S.BoxCard>
                  <Image
                    style={{ width: 45, height: 15 }}
                    source={require("../../Images/img/visa.png")}
                  />
                  <Text style={{ fontSize: 14, fontWeight: "700" }}>Visa</Text>
                </S.BoxCard>
              </TouchableOpacity>
              <TouchableOpacity>
                <S.BoxCard>
                  <Image
                    style={{ width: 45, height: 15 }}
                    source={require("../../Images/img/visa.png")}
                  />
                  <Text style={{ fontSize: 14, fontWeight: "700" }}>Visa</Text>
                </S.BoxCard>
              </TouchableOpacity>
            </ScrollView>
            <S.Table>
              <S.HeaderTable>
                <S.TextHeader>Produto</S.TextHeader>
                <S.TextHeader>Parcela</S.TextHeader>
                <S.TextHeader>Taxa</S.TextHeader>
              </S.HeaderTable>
              <View style={{ marginVertical: 10 }}>
                <FlatList data={TaxPaymentByMethod} renderItem={renderItem} />
              </View>
            </S.Table>
            <S.ButtonReturn background="#1195a2" style={{ marginHorizontal: 25 }}>
              <Text
                style={{
                  color: "#FFF",
                  textAlign: "center",
                }}
              >
                Voltar
              </Text>
            </S.ButtonReturn>
          </S.Content>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaxPayment;
