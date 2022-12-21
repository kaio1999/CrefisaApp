import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Beneficios from "./src/component/CrefisaPj/Beneficios";
import ChangeAdress from "./src/component/CrefisaPj/ChangeAdress";
import EnderecoMaquininha from "./src/component/CrefisaPj/EnderecoMaquininha";
import PlanConfirmationUser from "./src/component/CrefisaPj/ConfirmPlan";
import Contract from "./src/component/CrefisaPj/Contract";
import EmailConfirmation from "./src/component/CrefisaPj/emailConfirmation";
import Faturamento from "./src/component/CrefisaPj/Faturamento";
import Maquininha from "./src/component/CrefisaPj/Maquininha";
import Payment from "./src/component/CrefisaPj/Payment";
import TaxPayment from "./src/component/CrefisaPj/taxPayments";
import TutorialOne from "./src/component/CrefisaPj/tutorialOne";
import TutorialThree from "./src/component/CrefisaPj/tutorialthree";
import TutorialTwo from "./src/component/CrefisaPj/tutorialtwo";
import Tickets from "./src/component/tickets/Tickets";
import BusinessDays from "./src/component/CrefisaPj/BusinessDays";
import BusinessHour from "./src/component/CrefisaPj/BusinessHour";
import ChipConfirm from "./src/component/CrefisaPj/ChipConfirm";

export default function App() {
  return (
    <>
      <ChipConfirm />
    </>
  );
}
