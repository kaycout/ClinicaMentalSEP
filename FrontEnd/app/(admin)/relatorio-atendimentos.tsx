// importação principal do React
import React from 'react';

// importação dos componentes nativos do React Native
import {
  // componente usado para criar divisões na tela
  View,
  // componente de texto
  Text,
  // responsável pelos estilos
  StyleSheet,
  // botão clicável
  TouchableOpacity,
  // componente de imagem
  Image,
  // permite rolagem na tela
  ScrollView,
  // cria alertas
  Alert,
  // hook que pega largura da tela
  useWindowDimensions,
} from 'react-native';

// importação do router
import { useRouter } from 'expo-router';

// função principal da tela
export default function RelatorioAtendimentos() {

  // largura da tela
const { width } = useWindowDimensions();

// verifica se é desktop
const isDesktop = width >= 900;

  // hook de navegação
  const router = useRouter();

  // função responsável por baixar o relatório
  const baixarRelatorio = async () => {

    // alerta informando geração do relatório
    Alert.alert(
      'Relatório',
      'O arquivo Excel foi gerado com sucesso.'
    );

    // futuramente aqui será feita:
    // geração da planilha Excel
    // download automático
    // abertura no Excel
  };

  // bloqueia acesso mobile
if (!isDesktop) {
  return (

    <View style={styles.mobileContainer}>

      {/* ícone */}
      <Text style={styles.mobileIcon}>💻</Text>

      {/* título */}
      <Text style={styles.mobileTitle}>Disponível apenas no desktop</Text>

      {/* descrição */}
      <Text style={styles.mobileText}>Os relatórios só podem ser gerados na versão desktop do sistema.</Text>
    </View>
  );
}

  // retorno visual da tela
  return (

    // container principal
    <View style={styles.container}>

      {/* sidebar lateral */}
      <View style={styles.sidebar}>

        {/* área do logo */}
        <View style={styles.logoBox}>

          {/* símbolo da psicologia */}
          <Text style={styles.psi}>Ψ</Text>

          {/* textos do logo */}
          <View>
            {/* nome da clínica */}
            <Text style={styles.logoText}>SEP</Text>
            <Text style={styles.logoSub}>Clínica de Psicologia</Text>
          </View>
        </View>

        {/* menu lateral */}
        <View style={styles.menuArea}>

          {/* item ativo do menu */}
          <TouchableOpacity
            style={[
              styles.menuItem,
              styles.menuActive,
            ]}
          >

            {/* ícone do relatório */}
            <Image
              source={require('../../assets/images/relatorio2.png')}
              style={styles.menuIcon}
            />

            {/* texto do menu */}
            <Text style={[styles.menuText, styles.menuTextActive,]}>
              Relatórios</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* conteúdo principal */}
      <ScrollView

        // estilos internos
        contentContainerStyle={styles.content}

        // remove barra de rolagem
        showsVerticalScrollIndicator={false}
      >

        {/* título principal */}
        <Text style={styles.title}>Relatório de Atendimentos</Text>

        {/* subtítulo */}
        <Text style={styles.subtitle}>

          {/* descrição */}
          Gere relatórios completos com todos os
          atendimentos realizados na clínica.
        </Text>

        {/* card principal */}
        <View style={styles.card}>

          {/* imagem ilustrativa */}
          <Image
            source={require('../../assets/images/excel.png')}
            style={styles.reportImage}
          />

          {/* título do card */}
          <Text style={styles.cardTitle}>Relatório Final de Atendimentos</Text>

          {/* descrição do card */}
          <Text style={styles.cardDescription}>

            {/* texto explicativo */}
            Baixe um arquivo Excel contendo todos os
            atendimentos cadastrados no sistema.
          </Text>

          {/* botão de download */}
          <TouchableOpacity

            // estilo do botão
            style={styles.downloadButton}

            // função executada ao clicar
            onPress={baixarRelatorio}
          >

            {/* texto do botão */}
            <Text style={styles.downloadButtonText}>Baixar Relatório</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

// estilos da tela
const styles = StyleSheet.create({

  // container principal
  container: {
    flex: 1, // ocupa toda a tela
    flexDirection: 'row', // organiza elementos lado a lado
    backgroundColor: '#F5F7FB', // cor de fundo
  },

  // sidebar
    sidebar: {
    width: 270,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#DCEBE7',
    paddingTop: 28,
  },
  
  // logo da clinica
  logoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 24,
    marginBottom: 36,
  },

  // símbolo psi
  psi: {
    fontSize: 38,
    color: '#0C706E',
    fontWeight: '700',
  },

  // texto sep
  logoText: {
    fontSize: 24,
    color: '#17262F',
    fontWeight: '700',
  },

  // subtítulo
  logoSub: {
    fontSize: 12,
    color: '#70808A',
    marginTop: 2,
  },

  // área do menu
  menuArea: {
    marginTop: 10, // margem superior
  },

  // item do menu
  menuItem: {
  flexDirection: 'row', // elementos em linha
  alignItems: 'center', // alinhamento vertical
  paddingVertical: 14, // espaçamento vertical
  paddingHorizontal: 14, // espaçamento horizontal
  borderRadius: 12, // arredondamento
  marginHorizontal: 10, // espaçamento para não encostar nas bordas
  },

  // item ativo do menu
  menuActive: {
    backgroundColor: '#DDF3F2', // cor de fundo
  },

  // ícone do menu
  menuIcon: {
    width: 22, // largura
    height: 22, // altura
    marginRight: 12, // margem direita
    resizeMode: 'contain', // redimensionamento
  },

  // texto padrão do menu
  menuText: {
    fontSize: 15, // tamanho da fonte
    color: '#4B5563', // cor
    fontWeight: '500', // peso da fonte
  },

  // texto ativo do menu
  menuTextActive: {
    color: '#0C706E', // cor
    fontWeight: 'bold', // negrito
  },

  // conteúdo principal
  content: {
    flexGrow: 1, // ocupa espaço restante
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center', // centraliza horizontalmente
    padding: 40, // espaçamento interno
  },

  // título principal
  title: {
    fontSize: 32, // tamanho da fonte
    fontWeight: 'bold', // negrito
    color: '#111827', // cor
    marginBottom: 10, // margem inferior
  },

  // subtítulo
  subtitle: {
    fontSize: 16, // tamanho da fonte
    color: '#6B7280', // cor
    textAlign: 'center', // alinhamento centralizado
    marginBottom: 40, // margem inferior
    maxWidth: 650, // largura máxima
    lineHeight: 24, // altura entre linhas
  },

  // card principal
  card: {
    width: '100%', // largura total
    maxWidth: 500, // largura máxima
    backgroundColor: '#FFFFFF', // fundo branco
    borderRadius: 24, // arredondamento
    padding: 30, // espaçamento interno
    alignItems: 'center', // alinhamento horizontal
    shadowColor: '#000', // sombra ios
    shadowOpacity: 0.05, // opacidade da sombra
    shadowRadius: 10, // desfoque da sombra
    elevation: 3, // sombra android
  },

  // imagem do relatório
  reportImage: {
    width: 120, // largura
    height: 120, // altura
    resizeMode: 'contain', // redimensionamento
    marginBottom: 20, // margem inferior
  },

  // título do card
  cardTitle: {
    fontSize: 22, // tamanho da fonte
    fontWeight: 'bold', // negrito
    color: '#111827', // cor
    marginBottom: 12, // margem inferior
    textAlign: 'center', // alinhamento centralizado
  },

  // descrição do card
  cardDescription: {
    fontSize: 15, // tamanho da fonte
    color: '#6B7280', // cor
    textAlign: 'center', // alinhamento centralizado
    lineHeight: 22, // altura entre linhas
    marginBottom: 30, // margem inferior
  },

  // botão de download
  downloadButton: {
    backgroundColor: '#0C706E', // cor de fundo
    paddingVertical: 16, // espaçamento vertical
    paddingHorizontal: 30, // espaçamento horizontal
    borderRadius: 14, // arredondamento
    width: '100%', // largura total
  },

  // texto do botão
  downloadButtonText: {
    color: '#FFFFFF', // cor do texto
    fontSize: 16, // tamanho da fonte
    fontWeight: 'bold', // negrito
    textAlign: 'center', // alinhamento centralizado
  },

  // tela exibida no mobile
  mobileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#F5F7FB',
  },

  // ícone
  mobileIcon: {
    fontSize: 70,
    marginBottom: 20,
  },

  // título
  mobileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 12,
  },

  // texto
  mobileText: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },
});