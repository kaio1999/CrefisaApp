import React from "react";
import { Button, Image, SafeAreaView, Text, View } from "react-native";
import tutorialTwo from "../../Images/img/TutorialTwo.jpg";

import * as S from "./TutorialTwo.style";

const TutorialTwo = () => {
  return (
    <SafeAreaView>
      <View>
        <S.Image source={tutorialTwo} />
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
          <S.Progress>
            <Text />
          </S.Progress>
        </View>
        <S.Content>
          <S.Title>Transações por aproximação</S.Title>
          <S.Text style={{marginTop: 10}}>
            As transações com a maquininha da Crefisa Pay podem ser feitas
            aproximando
          </S.Text>
          <S.Text style={{marginTop: 0}}>o cartão</S.Text>
          <View style={{ marginTop: "70%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <S.ButtonDrop>Pular</S.ButtonDrop>
              <S.ButtonContinue>
                <Text style={{ color: "#FFF" }}>Continuar</Text>
              </S.ButtonContinue>
            </View>
          </View>
        </S.Content>
      </View>
    </SafeAreaView>
  );
};

export default TutorialTwo;
