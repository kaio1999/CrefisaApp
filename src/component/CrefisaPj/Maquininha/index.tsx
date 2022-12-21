import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import EmailBox from "../../Images/img/email.jpg";

import * as S from "./maquininha.style";

const Maquininha = () => {
  const [count, setCount] = React.useState<any>(1);

  React.useEffect(() => {
    if (count >= 3) {
      setCount(2);
    }
    if (count < 1) {
      setCount(1);
    }
  }, [count]);

  return (
    <SafeAreaView>
      <ScrollView>
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
            <S.Image source={require("../../Images/img/maquininha.png")} />
            <S.Title>De quantas maquininhas você precisa?</S.Title>
            <S.BoxCount>
              <View>
                <S.ImageMachine
                  source={require("../../Images/img/machine.png")}
                />
                <S.TitleChoice>Maquininha Crefisa Pay</S.TitleChoice>
                <S.Text>Escolha até 2 unidades</S.Text>
              </View>
              <S.Counter>
                <TouchableOpacity onPress={() => setCount(count - 1)}>
                  <S.Operation color={count <= 1 ? "#C4C4C4" : "#1195A2"}>
                    {"-"}
                  </S.Operation>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#4A5B64",
                    fontWeight: "700",
                    marginHorizontal: 25,
                  }}
                >
                  {count}
                </Text>
                <TouchableOpacity onPress={() => setCount(count + 1)}>
                  <S.Operation color={count === 2 ? "#C4C4C4" : "#1195A2"}>
                    {"+"}
                  </S.Operation>
                </TouchableOpacity>
              </S.Counter>
            </S.BoxCount>
            <View style={{ marginTop: "65%" }}>
              {count > 1 && (
                <S.Alert>
                  <Image
                    style={{
                      width: 32,
                      height: 32,
                    }}
                    source={require("../../Images/img/atenção.png")}
                  />
                  <S.TextAlert>
                    Solicitações de máquinas adicionais devem ser feitas via
                    Central de Atendimento{" "}
                    <Text style={{ color: "#1195A2", fontWeight: "bold" }}>
                      0800 273 3374
                    </Text>
                    .
                  </S.TextAlert>
                </S.Alert>
              )}
            </View>
            <S.ButtonContinue marginTop={count < 2 ? '25%' : 0} background={count > 0 ? "#1195a2" : "#E5E5E5"}>
                <Text
                  disabled={count === 0}
                  style={{
                    color: count > 0 ? "#FFF" : "#C4C4C4",
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

export default Maquininha;
