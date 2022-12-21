import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Switch,
} from "react-native";

import * as S from "./Contract.style";

const Contract = () => {
  const [contract, setContract] = React.useState<boolean>(false);

  return (
    <SafeAreaView>
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
          Termos e condições
        </S.TitleHeader>
      </S.Header>
      <ScrollView>
        <View>
          <S.Content>
            <S.Title>Termos e condições</S.Title>
            <S.Text>
              Este Termo é parte integrante do Contrato de Adesão e
              Credenciamento de Estabelecimento à Operação com Instrumentos de
              Pagamento, disponível para consulta no site
              www.crefisa.com.br/crefisapay e demonstra o interesse inequívoco
              do Estabelecimento na contratação do Sistema Crefisa (“Meios de
              Pagamento”), disponibilizado pelo Banco Crefisa S.A. (“Instituição
              Credenciadora”), inscrito no CNPJ nº 61.033.106/0001-86, e dos
              demais serviços indicados neste documento ou que poderão ser
              habilitados no Equipamento, conforme disposto no Contrato. O
              ESTABELECIMENTO DECLARA QUE: (1) todas as informações fornecidas
              são verídicas e estão atualizadas até a presente data,
              comprometendo-se, irrevogavelmente, a mantê-las atualizadas
              perante a Instituição Credenciadora. O endereço comercial
              informado no momento da adesão somente poderá ser distinto do
              endereço de instalação nos casos autorizados pela legislação
              vigente, sob pena do Estabelecimento responder integralmente
              perante os órgãos competentes, isentando a Instituição
              Credenciadora de qualquer responsabilidade na omissão ou alteração
              dos dados informados; (2) teve prévio acesso, leu e concorda com
              todos os termos do Contrato e seus Anexos; (3) está ciente de que
              sua afiliação ao Sistema Crefisa e aos demais produtos
              disponibilizados dependem da prévia aceitação da Instituição
              Credenciadora e/ou dos Instituidores de Arranjos de Pagamentos, de
              acordo com a política de cadastro e crédito em vigência, e se
              aceito representará a adesão do Estabelecimento ao Contrato e
              Anexos dos produtos contratados; (4) está ciente que os canais de
              captura poderão ser habilitados para aceitação dos meios de
              pagamentos dos Instituidores de Arranjos de Pagamentos
              contratantes dos serviços de captura / credenciamento da
              Instituição Credenciadora, mediante aprovação prévia do
              Estabelecimento pela Instituição Credenciadora, conforme o caso,
              sendo que a assinatura da Ordem de Serviço de instalação do(s)
              Equipamento(s) e a primeira transação com o meio de pagamento da
              Bandeira representará a concordância do Estabelecimento com as
              condições comerciais dos Instituidores de Arranjos de Pagamentos e
              da Instituição Credenciadora; (5) o valor de locação do
              Equipamento contratado, se aplicável, será devido até a efetiva
              devolução do equipamento e acessórios ao Banco Crefisa S/A, nos
              termos do Contrato; (6) está ciente de que serão aplicados
              encargos moratórios pelo inadimplemento das obrigações, de acordo
              com o disposto no Contrato.
            </S.Text>
            <S.Text style={{ marginVertical: 20 }}>
              O ESTABELECIMENTO AUTORIZA a Instituição Credenciadora a: (1)
              confeccionar seu cadastro, com atualização periódica; (2)
              compartilhar seus dados cadastrais e informações deste Termo e do
              Contrato com outras empresas pertencentes ao mesmo grupo econômico
              da Instituição Credenciadora, com a Processadora DXC e Solução de
              Captura Rede Celer e Phoebus, com os Instituidores de Arranjos de
              Pagamentos ou, ainda, com órgãos da administração pública direta
              ou indireta, se assim solicitados, inclusive para ofertas de
              produtos e serviços, bem como os Instituidores de Arranjos de
              Pagamentos contratantes dos serviços ofertados pela Instituição
              Credenciadora; (3) divulgar ao público seu nome, seu endereço e
              telefone, sem nenhum ônus, nos sites, aplicativo, catálogos e
              outros materiais promocionais da Instituição Credenciadora para
              ações de marketing; (4) em caso de atraso no pagamento dos valores
              devidos à Instituição Credenciadora, (i) requerer que qualquer
              instituição financeira conveniada ao Sistema Crefisa, inclusive o
              banco domicílio caracterizado neste documento ou contratado pela
              Instituição Credenciadora transfira à Instituição Credenciadora o
              valor devido parcial ou integral pelo Estabelecimento mediante
              débito no Domicílio Bancário, (ii) requerer que qualquer
              Credenciadora contratada ou que venha a ser contratada pelo
              Estabelecimento, diretamente dos valores dos recebíveis que o
              Estabelecimento possuir junto à Credenciadora, (iii) realize a
              compensação dos créditos que o Estabelecimento tiver a receber da
              própria Instituição Credenciadora; (5) informar aos órgãos de
              proteção ao crédito, tais como SERASA e SPC, os dados relativos à
              falta de pagamento de obrigações assumidas; (6) contatá-lo por
              meio de cartas, e-mails, SMS, telefone, mensagens pelo Portal ou
              pelo Equipamento, aplicativos ou outros meios que forem
              instituídos após assinatura deste Termo.
            </S.Text>
            <S.Footer>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <Switch
                  trackColor={{ false: "#777", true: "#9FB2BC" }}
                  thumbColor={contract ? "#1195A2" : "#444"}
                  value={contract}
                  onValueChange={() => setContract(!contract)}
                />
                <S.Text>
                  Eu concordo com os termos e condições do cartão Crefisa
                  Empresarial
                </S.Text>
              </View>
              <S.ButtonContinue background={contract && '#1195A2'}>
                <Text disabled={!contract} style={{ color: contract ? '#FFF' : '#C4C4C4', textAlign: "center" }}>
                  Continuar
                </Text>
              </S.ButtonContinue>
            </S.Footer>
          </S.Content>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contract;
