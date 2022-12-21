import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import maquininha from "../../Images/img/crefisaPay.jpg";
import Elo from "../../Images/img/Bitmap.png";
import MasterCard from "../../Images/img/mastercard.png";
import Visa from "../../Images/img/visa.png";

import * as S from "./TutorialOne.style";

const TutorialOne = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <S.Image source={maquininha} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <S.Progress background="#1195A2">
              <Text />
            </S.Progress>
            <S.Progress>
              <Text />
            </S.Progress>
            <S.Progress>
              <Text />
            </S.Progress>
          </View>
          <S.Content>
            <S.Title>Aceitamos as principais bandeiras</S.Title>
            <S.Text>
              Com a Crefisa Pay, você vende usando as principais bandeiras de
              cartões do mercado: Visa, Mastercard e Elo. É facilidade para seus
              clientes e muito mais giro para os seus negócios!
            </S.Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 60,
              }}
            >
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Image source={MasterCard} />
                <Text
                  style={{ fontWeight: "700", fontSize: 16, color: "#4A5B64" }}
                >
                  Mastercard
                </Text>
              </View>
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Image source={Visa} />
                <Text
                  style={{ fontWeight: "700", fontSize: 16, color: "#4A5B64" }}
                >
                  Visa
                </Text>
              </View>
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Image source={Elo} />
                <Text
                  style={{ fontWeight: "700", fontSize: 16, color: "#4A5B64" }}
                >
                  Elo
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 100,
              }}
            >
              <S.ButtonDrop>Pular</S.ButtonDrop>
              <S.ButtonContinue>
                <Text style={{ color: "#FFF" }}>Continuar</Text>
              </S.ButtonContinue>
            </View>
          </S.Content>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default TutorialOne;
