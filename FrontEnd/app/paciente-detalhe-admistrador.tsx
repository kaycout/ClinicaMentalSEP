// arquivo app/paciente-detalhe.tsx

// importação principal do React, pois é necessário para criar componentes React Native.
import React from 'react';

// componentes nativos do React são usados nesta tela
import {
  ScrollView,
  // usado para criar estilos na tela
  StyleSheet,
  // componente de texto
  Text,
  // botão com clique e efeito ao toque
  TouchableOpacity,
  // componente base de estrutura e layout
  View,
  // hook que pega largura e altura da tela em tempo real
  // usado para responsividade entre mobile e desktop 
  useWindowDimensions,

} from 'react-native';

// biblioteca de ícones do Expo
// usado para exibir ícones visuais na interface da tela
import { Ionicons } from '@expo/vector-icons';

// router pra navegação entre telas
import { router } from 'expo-router';

// importando imagem para icones
import { Image } from 'react-native';

// componente de fundo degradê
// usado para deixar o background mais moderno e suave
import { LinearGradient } from 'expo-linear-gradient';

// tela de detalhes do paciente
export default function PacienteDetalheScreen() {

  // pegando largura da tela pra responsividade
  const { width } = useWindowDimensions();

  // define se é mobile ou desktop baseado na largura da tela
  const isDesktop = width >= 900;

    // fundo principal da tela
    return (
    <LinearGradient
      colors={['#F7FCFA', '#EEF8F5', '#F9FCFB']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >

    {/* estrutura principal da tela */}
    <View style={styles.page}>

        {/* sidebar lateral do administrador (aparece somente no desktop) */}
        {isDesktop && (
          <View style={styles.sidebar}>

            {/* área do logo da clínica */}
            <View style={styles.logoBox}>
              <Text style={styles.psi}>Ψ</Text>

              {/* textos do logo */}
              <View>
                <Text style={styles.logoText}>SEP</Text>
                <Text style={styles.logoSub}>Clínica de Psicologia</Text>
              </View>
            </View>

            {/* área principal do menu lateral */}
            <View style={styles.menuArea}>

              {/* item do menu: administrador */}
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => router.push('/acesso-administrador')}
              >
                {/* ícone do administrador */}
                <Image
                  source={require('../assets/images/administrador.png')}
                  style={styles.menuIcon}
                />

                {/* texto do menu */}
                <Text style={styles.menuText}>
                  Administrador
                </Text>
              </TouchableOpacity>

        {/* título da seção de gerenciamento */}
        <Text style={styles.menuLabel}>
          GERENCIAMENTO
        </Text>

        {/* item do menu: agendamentos */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/calendario-administrador')}
        >
          {/* ícone de agendamentos */}
          <Image
            source={require('../assets/images/agendamento.png')}
            style={styles.menuIcon}
          />
            
          {/* texto do menu */}
          <Text style={styles.menuText}>
            Agendamentos
          </Text>
        </TouchableOpacity>
            
        {/* item do menu: pacientes (ativo) */}
        <TouchableOpacity
          style={[
            styles.menuItem,
            styles.menuActive,
          ]}
        >
          {/* ícone de pacientes */}
          <Image
            source={require('../assets/images/paciente.png')}
            style={styles.menuIcon}
          />
            
          {/* texto do menu ativo */}
          <Text
            style={[
              styles.menuText,
              styles.menuTextActive,
            ]}
          >
            Pacientes
          </Text>
        </TouchableOpacity>
            
        {/* item do menu: salas */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/salas-administrador')}
        >
          {/* ícone de salas */}
          <Image
            source={require('../assets/images/salas.png')}
            style={styles.menuIcon}
          />

          {/* texto do menu */}
          <Text style={styles.menuText}>
            Salas
          </Text>
        </TouchableOpacity>
            
        {/* item do menu: cancelamentos */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/cancelamentos')}
        >
          {/* ícone de cancelamentos */}
          <Image
            source={require('../assets/images/cancelamento.png')}
            style={styles.menuIcon}
          />
            
          {/* texto do menu */}
          <Text style={styles.menuText}>
            Cancelamentos
          </Text>
        </TouchableOpacity>
            
        {/* item do menu: cadastro de estagiário */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/cadastro-estagiario')}
        >
          {/* ícone de estagiário */}
          <Image
            source={require('../assets/images/estagiario.png')}
            style={styles.menuIcon}
          />
            
          {/* texto do menu */}
          <Text style={styles.menuText}>
            Cadastrar Estagiário
          </Text>
        </TouchableOpacity>
            
        {/* item do menu: perfil */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/perfil-administrador')}
        >
          {/* ícone de perfil */}
          <Image
            source={require('../assets/images/perfil.png')}
            style={styles.menuIcon}
          />
            
          {/* texto do menu */}
          <Text style={styles.menuText}> Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}

      {/* área principal do conteúdo da tela */}
      <ScrollView
        style={styles.content}

        /* adiciona espaçamento interno e centralização no desktop */
        contentContainerStyle={[
          styles.scrollContent,
          isDesktop && styles.contentDesktop,
        ]}

        /* remove a barra lateral de rolagem */
        showsVerticalScrollIndicator={false}
      >

        {/* círculo decorativo grande do lado esquerdo */}
        <View style={styles.decorCircleOne} />

        {/* círculo decorativo do lado direito */}
        <View style={styles.decorCircleTwo} />

        {/* círculo decorativo inferior */}
        <View style={styles.decorCircleThree} />

        {/* bolinha decorativa superior */}
        <View style={styles.decorDotOne} />

        {/* bolinha decorativa lateral */}
        <View style={styles.decorDotTwo} />

        {/* bolinha decorativa direita */}
        <View style={styles.decorDotThree} />

        {/* área que centraliza todo o conteúdo */}
        <View style={styles.wrapper}>

          {/* topo da tela */}
          <View style={styles.headerTextBox}>

            {/* título principal */}
            <Text style={styles.pageTitle}>
              Detalhes do Paciente
            </Text>

            {/* subtítulo da página */}
            <Text style={styles.pageSubtitle}>
              Visualize as informações e acompanhamentos permitidos do paciente.
            </Text>
          </View>

          {/* card principal do paciente */}
          <View style={styles.profileCard}>

            {/* avatar do paciente */}
            <View style={styles.avatar}>

              {/* iniciais do paciente */}
              <Text style={styles.avatarText}>
                AS
              </Text>
            </View>

            {/* informações principais do paciente */}
            <View style={styles.profileInfo}>

              {/* nome do paciente */}
              <Text style={styles.patientName}>
                Ana Silva
              </Text>

              {/* idade e categoria */}
              <Text style={styles.patientSub}>
                14 anos • Criança
              </Text>

              {/* badge de status */}
              <View style={styles.statusBadge}>

                {/* ícone do status */}
                <Ionicons
                  name="heart-outline"
                  size={14}
                  color="#0C706E"
                />

                {/* texto do status */}
                <Text style={styles.statusText}>
                  Em acompanhamento
                </Text>
              </View>
            </View>
          </View>

          {/* card de permissão administrativa */}
          <View style={styles.permissionCard}>

            {/* ícone do card */}
            <View style={styles.permissionIcon}>

              <Ionicons
                name="lock-closed-outline"
                size={19}
                color="#0C706E"
              />
            </View>

            {/* textos da permissão */}
            <View style={styles.permissionTextBox}>

              {/* título da permissão */}
              <Text style={styles.permissionTitle}>
                Acesso administrativo completo
              </Text>

              {/* descrição da permissão */}
              <Text style={styles.permissionDescription}>
                Nesta tela você possui permissão para visualizar,
                editar, excluir e acompanhar todas as informações
                relacionadas aos pacientes.
              </Text>
            </View>
          </View>

          {/* grid principal das informações */}
          <View
            style={[
              styles.grid,
              isDesktop && styles.gridDesktop,
            ]}
          >

            {/* card de dados básicos */}
            <View style={styles.sectionCard}>

              {/* cabeçalho da seção */}
              <View style={styles.sectionHeader}>

                {/* ícone da seção */}
                <Ionicons
                  name="person-outline"
                  size={19}
                  color="#0C706E"
                />

                {/* título da seção */}
                <Text style={styles.sectionTitle}>
                  Dados básicos
                </Text>
              </View>

              {/* linhas de informações */}
              <InfoRow label="Nome" value="Ana Silva" />
              <InfoRow label="Idade" value="14 anos" />
              <InfoRow label="Tipo" value="Criança" />
              <InfoRow label="Responsável" value="Mariana Silva" />
              <InfoRow label="Contato" value="11 95596-4867" />
            </View>

            {/* card de resumo */}
            <View style={styles.sectionCard}>

              {/* cabeçalho da seção */}
              <View style={styles.sectionHeader}>

                {/* ícone da seção */}
                <Ionicons
                  name="document-text-outline"
                  size={19}
                  color="#0C706E"
                />

                {/* título da seção */}
                <Text style={styles.sectionTitle}>
                  Resumo do acompanhamento
                </Text>
              </View>

              {/* informações do acompanhamento */}
              <InfoRow label="Atendimentos" value="8" />
              <InfoRow label="Presenças" value="6" />
              <InfoRow label="Faltas" value="2" />
              <InfoRow label="Cancelamentos" value="2" />

              {/* situação atual */}
              <InfoRow
                label="Situação atual"
                value="Em acompanhamento"
              />
            </View>
          </View>

          {/* card de observações */}
          <View style={styles.sectionCard}>

            {/* cabeçalho */}
            <View style={styles.sectionHeader}>

              {/* ícone */}
              <Ionicons
                name="chatbox-ellipses-outline"
                size={19}
                color="#0C706E"
              />

              {/* título */}
              <Text style={styles.sectionTitle}>
                Observações administrativas
              </Text>
            </View>

            {/* observação */}
            <View style={styles.noteBox}>
              <Text style={styles.note}>
                Paciente apresenta boa adaptação às sessões.
              </Text>
            </View>

            {/* observação */}
            <View style={styles.noteBox}>
              <Text style={styles.note}>
                Necessita acompanhamento contínuo com responsável.
              </Text>
            </View>

            {/* observação */}
            <View style={styles.noteBox}>
              <Text style={styles.note}>
                Última sessão realizada sem intercorrências.
              </Text>
            </View>
          </View>

          {/* card de ações */}
          <View style={styles.actionsCard}>

            {/* botão principal */}
            <TouchableOpacity style={styles.primaryButton}>

              {/* ícone */}
              <Ionicons
                name="eye-outline"
                size={17}
                color="#FFFFFF"
              />

              {/* texto */}
              <Text style={styles.primaryButtonText}>
                Editar Paciente
              </Text>
            </TouchableOpacity>

            {/* botão secundário */}
            <TouchableOpacity style={styles.secondaryButton}>

              {/* ícone */}
              <Ionicons
                name="calendar-outline"
                size={17}
                color="#0C706E"
              />

              {/* texto */}
              <Text style={styles.secondaryButtonText}>
                Ver agenda do paciente
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  </LinearGradient>
  );
}

// componente das linhas de informação
function InfoRow({ label, value, locked }: any) {
  return (
    <View style={styles.infoRow}>

      <Text style={styles.infoLabel}>
        {label}
      </Text>

      <View style={styles.infoValueBox}>

        {locked && (
          <Ionicons
            name="lock-closed-outline"
            size={13}
            color="#94A3B8"
          />
        )}

        <Text
          style={[
            styles.infoValue,
            locked && styles.infoValueLocked,
          ]}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}

// criação centralizada dos estilos da tela
// aqui ficam todas as estilizações da interface organizadas por sessão
const styles = StyleSheet.create({

  // fundo principal da tela
  // ocupa toda a altura disponível
  background: {
    flex: 1,
  },

  // estrutura geral da página
  page: {
    flex: 1,
    flexDirection: 'row',
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

  // área menu
  menuArea: {
    paddingHorizontal: 16,
  },

  // label menu
  menuLabel: {
    fontSize: 11,
    color: '#8A98A3',
    fontWeight: '600',
    marginTop: 14,
    marginBottom: 10,
    marginLeft: 12,
    letterSpacing: 1,
  },

  // item menu
  menuItem: {
    height: 50,
    borderRadius: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 6,
  },

  menuContainer: {
    paddingHorizontal: 14,
    paddingTop: 8,
  },

  // item ativo
  menuActive: {
    backgroundColor: '#E9F7F5',
  },

  // ícone png
  menuIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#0C706E',
  },

  // texto menu
  menuText: {
    fontSize: 15,
    color: '#70808A',
    fontWeight: '500',
  },

  // texto ativo
  menuTextActive: {
    color: '#0C706E',
    fontWeight: '600',
  },

  // área principal do conteúdo da tela
  content: {
    flex: 1,
  },

  // conteúdo com espaçamento
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 42,
    paddingBottom: 34,
  },

  // círculo decorativo grande da esquerda
  decorCircleOne: {
    position: 'absolute',
    width: 310,
    height: 310,
    borderRadius: 155,
    backgroundColor: '#DCEFEB',
    opacity: 0.55,
    left: -110,
    top: 120,
  },

  // círculo decorativo grande da direita
  decorCircleTwo: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#E3F3EF',
    opacity: 0.75,
    right: -90,
    top: 230,
  },

  // círculo decorativo mais baixo
  decorCircleThree: {
    position: 'absolute',
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: '#DDEFEA',
    opacity: 0.45,
    left: 40,
    bottom: 80,
  },

  // bolinha decorativa
  decorDotOne: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EAF6F2',
    top: 52,
    left: '58%',
  },

  // bolinha decorativa
  decorDotTwo: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#CBE6DF',
    top: 300,
    left: 40,
  },

  // bolinha decorativa
  decorDotThree: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#E1F2EE',
    top: 120,
    right: 110,
  },

  contentDesktop: {
    paddingHorizontal: 28,
    paddingTop: 42,
  },

  // área que segura todo o conteúdo
  wrapper: {
  width: '100%',
  },

  // caixa que agrupa o título e subtítulo da página
  headerTextBox: {
    marginBottom: 24,
  },

  // título principal da tela
  pageTitle: {
    fontSize: 30,
    color: '#17262F',
    fontWeight: '600',
  },

  // subtítulo explicativo abaixo do título principal
  pageSubtitle: {
    fontSize: 15,
    color: '#70808A',
    marginTop: 8,
    lineHeight: 22,
  },

  // card principal com informações resumidas do paciente
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#DDE8E5',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 16,
  },

  // avatar circular do paciente
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#E3F2EF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // texto das iniciais 
  avatarText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0C706E',
  },

  // área que segura os textos do paciente
  profileInfo: {
    flex: 1,
  },

  // nome principal do paciente
  patientName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#152322',
  },

  // texto secundário do paciente
  // mostra idade e categoria
  patientSub: {
    fontSize: 14,
    color: '#70808A',
    marginTop: 4,
  },

  // badge de status do paciente
  // exibe situação atual do acompanhamento
  statusBadge: {
    alignSelf: 'flex-start',
    minHeight: 32,
    borderRadius: 16,
    backgroundColor: '#EAF6F2',
    paddingHorizontal: 12,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  // texto do status do paciente
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0C706E',
  },

  // card de permissões administrativas
  // informa o nível de acesso disponível
  permissionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#DDE8E5',
    padding: 16,
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },

  // círculo do ícone de permissão
  permissionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EAF6F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // área dos textos do card de permissão
  permissionTextBox: {
    flex: 1,
  },

  // título principal da permissão
  permissionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0C706E',
    marginBottom: 4,
  },

  // descrição detalhada da permissão administrativa
  permissionDescription: {
    fontSize: 13,
    color: '#6B7C83',
    lineHeight: 20,
  },

  // organização geral dos cards
  // adiciona espaçamento entre os elementos
  grid: {
    gap: 16,
  },

  // organização dos cards no desktop
  // deixa os cards lado a lado
  gridDesktop: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-start',
  },

  // card padrão das seções da tela
  // usado em dados básicos, resumo e observações
  sectionCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E9E6',
    padding: 18,
    marginBottom: 16,
    minWidth: 0,
  },

  // cabeçalho das seções
  // organiza ícone e título horizontalmente
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },

  // título das seções da tela
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#152322',
  },

  // linha individual de informação
  // usada para nome, idade, responsável etc
  infoRow: {
    minHeight: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },

  // texto da label da informação
  infoLabel: {
    fontSize: 13,
    color: '#70808A',
  },

  // área que segura valor e ícone de bloqueio
  infoValueBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flexShrink: 1,
  },

  // valor da informação
  infoValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#152322',
    textAlign: 'right',
  },

  // estilo aplicado quando a informação está bloqueada
  infoValueLocked: {
    color: '#94A3B8',
  },

  // caixa individual de observação
  noteBox: {
    backgroundColor: '#F8FCFA',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E0E9E6',
    padding: 12,
    marginBottom: 10,
  },

  // texto das observações
  note: {
    fontSize: 13,
    lineHeight: 20,
    color: '#5B6D75',
  },

  // card que agrupa os botões de ação
  actionsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E9E6',
    padding: 14,
    gap: 10,
  },

  // botão principal da tela
  // usado para editar paciente
  primaryButton: {
    minHeight: 48,
    borderRadius: 14,
    backgroundColor: '#0C706E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  // texto do botão principal
  primaryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // botão secundário da tela
  // usado para visualizar agenda
  secondaryButton: {
    minHeight: 48,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#0C706E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  // texto do botão secundário
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0C706E',
  },
});


