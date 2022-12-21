import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import tutorialThree from "../../Images/img/TutorialThree.jpg";

import * as S from "./TutorialThree.style";

const TutorialThree = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <S.Image source={tutorialThree} />
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
            <S.Progress background="#1195A2">
              <Text />
            </S.Progress>
            <S.Progress background="#1195A2">
              <Text />
            </S.Progress>
          </View>
          <S.Content>
            <S.Title>Gerencie as suas vendas pelo celular</S.Title>
            <S.Text>
              O app da Crefisa Pay te ajuda a gerenciar as suas vendas no seu
              celular.
            </S.Text>
            <View style={{ marginVertical: 25 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <S.ButtonContinue>
                  <Text style={{ color: "#FFF", textAlign: "center" }}>
                    Solicitar agora
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

export default TutorialThree;
