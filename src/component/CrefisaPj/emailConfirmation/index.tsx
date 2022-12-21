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
// import EmailBox from "../../Images/img/email.jpg";

import * as S from "./emailConfirmation.style";

const EmailConfirmation = () => {
  const [email, setEmail] = React.useState<any>(null);

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
            <S.Title>Antes de começar, informe o seu e-mail</S.Title>
            <S.Text style={{ marginTop: 10 }}>
              É importante que seja um e-mail ativo para receber informações
              importantes sobre sua maquininha Crefisa Pay.
            </S.Text>
            <View style={{ marginVertical: 20 }}>
              <View style={{ paddingHorizontal: 20 }}>
                <S.Input
                  borderColor="#C4C4C4"
                  required
                  placeholderTextColor="#9FB2BC"
                  keyboardType="email-address"
                  value={email}
                  placeholder="Seu melhor e-mail"
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                />
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
              </View>
            </View>
          </S.Content>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmailConfirmation;
