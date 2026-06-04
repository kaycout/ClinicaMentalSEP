// arquivo app/novo-agendamento.tsx

// importação principal do React, pois é necessário para criar componentes React Native.
import React, { useState } from 'react';

// componentes nativos do React são usados nesta tela
import {
  // barra de rolagem na tela
  ScrollView,
  // usado para criar estilos na tela
  StyleSheet,
  // componente de texto
  // componente de botão deslizante usado para ativar ou desativar opções
  Switch,
  // campo de digitação utilizado para entrada de textos,
  // números, datas, observações e outras informações digitadas pelo usuário
  TextInput,
  // inserir nomes e dados
  Text,
  // botão com clique e efeito ao toque
  TouchableOpacity,
  // componente base de estrutura e layout
  View,
  // hook que pega largura e altura da tela em tempo real
  // usado para responsividade entre mobile e desktop 
  useWindowDimensions,
} from 'react-native';

// router pra navegação entre telas
import { router } from 'expo-router';

// importa imagens para adicionar ícones ao sidebar
import { Image } from 'react-native';

// componente de fundo degradê
// usado para deixar o background mais moderno e suave
import { LinearGradient } from 'expo-linear-gradient';

// importa icones para adicionar ao sidebar
import { Ionicons } from '@expo/vector-icons';

// componente personalizado de seleção usado para escolher opções
// como horário, sala, duração e tipo de atendimento
import SelectField from '@/components/ui/selectField';

// componente de calendário e seleção de data/hora
// utilizado para abrir o calendário nativo do dispositivo
import DateTimePicker from '@react-native-community/datetimepicker';

import { Platform } from 'react-native';

// tela de novo agendamento
export default function NovoAgendamentoAdministradorScreen() {

  // pega a largura da tela pra responsividade
  const { width } = useWindowDimensions();

  // considera se é mobile quando a tela é menor que 900
  const isDesktop = width >= 900;

  // controla se o calendário está aberto ou fechado
  const [showDatePicker, setShowDatePicker] = useState(false);

  // armazena a data selecionada no calendário
  const [selectedDate, setSelectedDate] = useState(new Date());

  // guarda o nome do paciente digitado
  const [paciente, setPaciente] = useState('');

  // guarda o nome do estagiário digitado
  const [estagiario, setEstagiario] = useState('');

  // guarda a idade digitada
  const [idade, setIdade] = useState('');

  // guarda o responsável
  const [responsavel, setResponsavel] = useState('');

  // armazena o horário escolhido para o atendimento
  const [horario, setHorario] = useState('');

  // guarda a sala selecionada para a sessão
  const [sala, setSala] = useState('');

  // guarda a data formatada exibida no campo
  const [data, setData] = useState('12/06/2026');

  // armazena as observações digitadas pelo usuário
  const [observacoes, setObservacoes] = useState('');

  // controla se o agendamento automático está ativado
  const [automatico, setAutomatico] = useState(true);

 const onChangeDate = (event: any, selected?: Date) => {
  setShowDatePicker(false);

  if (selected) {
    setSelectedDate(selected);

    const formatted =
      selected.toLocaleDateString('pt-BR');

    setData(formatted);
  }
};

  return (
    // Coloca um fundo com degradê suave pra dar um visual mais clean
    <LinearGradient
      colors={['#F7FCFA', '#EEF8F5', '#F9FCFB']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.screen}
    >
      {/* sidebar aparece apenas no desktop */}
      {isDesktop && (
        <View style={styles.sidebar}>

          {/* logo */}
          <View style={styles.logoBox}>

            <Text style={styles.psi}>Ψ</Text>

            <View>
              <Text style={styles.logoText}>SEP</Text>
              <Text style={styles.logoSub}>Clínica de Psicologia</Text>
            </View>
          </View>

      {/* menu lateral */}
      <View style={styles.menuArea}>

        {/* administrador */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/acesso-administrador')}
        >
          <Image
            source={require('../assets/images/administrador.png')}
            style={styles.menuIcon}
          />

          <Text style={styles.menuText}>Administrador</Text>
        </TouchableOpacity>

        {/* label */}
        <Text style={styles.menuLabel}>GERENCIAMENTO</Text>

        {/* agendamentos */}
        <TouchableOpacity
          style={[ styles.menuItem, styles.menuActive,]}
          onPress={() => router.push('/calendario-administrador')}
        >
          <Image
            source={require('../assets/images/agendamento.png')}
            style={styles.menuIcon}
          />

          <Text
            style={[ styles.menuText, styles.menuTextActive,]}>Agendamentos</Text>
        </TouchableOpacity>

        {/* pacientes */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/pacientes-administrador')}
        >
          <Image
            source={require('../assets/images/paciente.png')}
            style={styles.menuIcon}
          />

          <Text style={styles.menuText}>Pacientes</Text>
        </TouchableOpacity>

        {/* salas */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/salas-administrador')}
        >
          <Image
            source={require('../assets/images/salas.png')}
            style={styles.menuIcon}
          />

          <Text style={styles.menuText}>Salas</Text>
        </TouchableOpacity>

        {/* cancelamentos */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/cancelamentos')}
        >
          <Image
            source={require('../assets/images/cancelamento.png')}
            style={styles.menuIcon}
          />

          <Text style={styles.menuText}>Cancelamentos</Text>
        </TouchableOpacity>

        {/* solicitacoes de reagendamentos*/}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/solicitacao-reagendamento')}
        >
          <Image
            source={require('../assets/images/reagendamento.png')}
            style={styles.menuIcon}
          />

          <Text style={styles.menuText}>Pedidos reagendamento</Text>
        </TouchableOpacity>

        {/* cadastrar estagiário */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/cadastro-estagiario')}
        >
          <Image
            source={require('../assets/images/estagiario.png')}
            style={styles.menuIcon}
          />

          <Text style={styles.menuText}>Cadastrar Estagiário</Text>
        </TouchableOpacity>

        {/* item do menu: relatório de atendimentos */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/relatorio-atendimentos')}
        >
          {/* ícone de relatório */}
          <Image
            source={require('../assets/images/relatorio2.png')}
            style={styles.menuIcon}
          />

          {/* texto do item relatório */}
          <Text style={styles.menuText}>Relatório Atendimentos</Text>
        </TouchableOpacity>
        
        {/* perfil */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/perfil-administrador')}
        >
          <Image
            source={require('../assets/images/perfil.png')}
            style={styles.menuIcon}
          />

          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}

    
    {/* área principal do conteúdo */}
    <ScrollView contentContainerStyle={styles.scrollContent}>
            
      {/* bolinhas do fundo */}
      <View style={styles.decorCircleOne} />
      <View style={styles.decorCircleTwo} />
      <View style={styles.decorCircleThree} />
      <View style={styles.decorDotOne} />
      <View style={styles.decorDotTwo} />
      <View style={styles.decorDotThree} />
      <View style={styles.decorDotFour} />

        {/* topo da tela */}
        <View style={styles.headerTextBox}>

          <Text style={styles.pageTitle}>Novo Agendamento</Text>

          <Text style={styles.pageSubtitle}>Preencha as informações para criar um novo atendimento.</Text>
        </View>

        {/* card principal */}
        <View style={styles.formCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIcon}>
              <Ionicons name="calendar-outline" size={22} color="#087A73" />
            </View>

            <View>
              <Text style={styles.cardTitle}>Dados do agendamento</Text>
              <Text style={styles.cardSubtitle}>Organize o atendimento do paciente</Text>
            </View>
          </View>

          {/* grid */}
          <View style={[ styles.grid, isDesktop && styles.gridDesktop,]}>

            {/* paciente */}
            <View style={[ styles.field, isDesktop && styles.fieldDesktop,]}>

              <Text style={styles.label}>Paciente</Text>

              <TextInput
                style={styles.input}
                placeholder="Digite o nome do paciente"
                placeholderTextColor="#94A3B8" value={paciente} onChangeText={setPaciente} />
            </View>

            {/* estagiário */}
            <View style={[styles.field, isDesktop && styles.fieldDesktop,]}>

              <Text style={styles.label}>Estagiário</Text>

              <TextInput
                style={styles.input}
                placeholder="Digite o nome do estagiário"
                placeholderTextColor="#94A3B8" value={estagiario} onChangeText={setEstagiario} />
            </View>

            {/* idade do paciente */}
            <View
              style={[
                styles.field,
                isDesktop && styles.fieldDesktop,
              ]}
            >

              {/* label */}
              <Text style={styles.label}>
                Idade
              </Text>

              {/* campo idade */}
              <TextInput
                style={styles.input}
                placeholder="Digite a idade"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                value={idade}
                onChangeText={setIdade}
              />
            </View>

            {/* responsavel */}
            {Number(idade) < 16 && idade !== '' && (

              <View
                style={[
                  styles.field,
                  isDesktop && styles.fieldDesktop,
                ]}
              >

                {/* label */}
                <Text style={styles.label}>Responsável</Text>

                {/* campo responsável */}
                <TextInput
                  style={styles.input}
                  placeholder="Digite o nome do responsável"
                  placeholderTextColor="#94A3B8"
                  value={responsavel}
                  onChangeText={setResponsavel}
                />
              </View>
            )}

            {/* sala */}
            <View
              style={[ styles.field, isDesktop && styles.fieldDesktop, styles.selectHighZ,]}
            >
              <SelectField
                label="Sala"
                value={sala}
                onChange={setSala}
                placeholder="Selecione uma sala"
                options={[
                  { label: 'Sala 1', value: '1' },
                  { label: 'Sala 2', value: '2' },
                  { label: 'Sala 3', value: 'sala-3' },
                  { label: 'Sala infantil', value: 'sala-infantil' },
                  { label: 'Sala de grupos', value: 'sala-de-grupos' },
                  { label: 'Sala de supervisão', value: 'sala-de-supervisao' },
                ]}
              />
            </View>

            {/* horário */}
            <View
              style={[styles.field, isDesktop && styles.fieldDesktop, styles.selectHighZ,]}>
              <SelectField
                label="Horário"
                value={horario}
                onChange={setHorario}
                placeholder="Selecione um horário"
                options={[
                  { label: '08:00', value: '08:00' },
                  { label: '09:00', value: '09:00' },
                  { label: '14:00', value: '14:00' },
                  { label: '15:00', value: '15:00' },
                  { label: '16:00', value: '16:00' },
                  { label: '17:00', value: '17:00' },
                  { label: '18:00', value: '18:00' },
                  { label: '19:00', value: '19:00' },
                  { label: '20:00', value: '20:00' },
                  { label: '21:00', value: '21:00' },
                ]}
              />
            </View>

            {/* campo de data do agendamento */}
            <View style={[ styles.field, isDesktop && styles.fieldDesktop,]}>

              {/* texto do label do campo */}
              <Text style={styles.label}>Data</Text>

              {/* verifica se está rodando na web */}
              {Platform.OS === 'web' ? (
                <TextInput style={styles.input} value={data} onChangeText={setData} placeholder="dd/mm/aaaa"/>

              ) : (
                <>

                  {/* botão que abre o calendário */}
                  <TouchableOpacity
                    style={styles.input}
                    onPress={() => setShowDatePicker(true)}
                  >

                  {/* conteúdo interno do botão */}
                  <View style={styles.inputContent}>

                    {/* ícone de calendário */}
                    <Ionicons
                      name="calendar-outline"
                      size={18}
                      color="#7E8D9B"
                    />

                    {/* texto exibindo a data selecionada */}
                    <Text style={styles.dateText}>
                      {data}
                    </Text>

                  </View>
                </TouchableOpacity>

                {/* exibe o calendário somente se showDatePicker for true */}
                {showDatePicker && ( <DateTimePicker value={selectedDate} mode="date" 
                display="default" onChange={onChangeDate}/>
                )}
              </>
            )}
            </View>

            {/* campo de observações */}
            <View
              style={[styles.field, isDesktop && styles.fieldDesktop,]}>

              {/* label do campo */}
              <Text style={styles.label}>Observações</Text>

              {/* campo de texto multilinha */}
              <TextInput

                // estilo do textarea
                style={styles.textArea}

                // valor atual das observações
                value={observacoes}

                // atualiza o estado das observações
                onChangeText={setObservacoes}

                // texto placeholder
                placeholder="Digite observações..."

                // cor do placeholder
                placeholderTextColor="#94A3B8"

                // permite múltiplas linhas
                multiline
              />
            </View>
          </View>

            {/* bloco do agendamento automático */}
            <View style={styles.autoBlock}>

              {/* área de textos do bloco automático */}
              <View style={styles.autoTextBox}>

                {/* título principal */}
                <Text style={styles.autoTitle}>Agendamento automático</Text>

                {/* subtítulo explicativo */}
                <Text style={styles.autoSubtitle}>Criar pacote automático de sessões</Text>
              </View>

              {/* switch de ativar/desativar automático */}
              <Switch

                // valor atual do switch
                value={automatico} onValueChange={setAutomatico}

                // cores da trilha do switch
                trackColor={{
                  false: '#CBD5E1',
                  true: '#BFE7DA',
                }}

                // cor da bolinha do switch
                thumbColor={ automatico ? '#0C706E' : '#FFFFFF' }/>
            </View>

            {/* área dos botões */}
            <View
              style={[ styles.buttonsRow, !isDesktop && styles.buttonsMobile,]}>

              {/* botão cancelar */}
              <TouchableOpacity
                style={styles.cancelButton}

                // volta para tela anterior
                onPress={() => router.back()}
              >

                {/* ícone do botão cancelar */}
                <Ionicons name="close-outline" size={20} color="#60768A" />

                {/* texto do botão cancelar */}
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>

              {/* botão salvar */}
              <TouchableOpacity style={styles.saveButton} onPress={() => router.push('/agendamento-sucesso-administrador')}>

                {/* ícone do botão salvar */}
                <Ionicons
                  name="checkmark-outline" size={20} color="#FFFFFF" />

                {/* texto do botão salvar */}
                <Text style={styles.saveText}>Salvar agendamento</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
    </LinearGradient>
  );
}

function MenuItem({ icon, label, path, active }: any) {
  return (
    <TouchableOpacity
      style={[styles.menuItem, active && styles.menuActive]}
      onPress={() => router.push(path)}
    >
      <Ionicons
        name={icon}
        size={20}
        color={active ? '#0C706E' : '#70808A'}
      />

      <Text style={[styles.menuText, active && styles.menuTextActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

// criação centralizada dos estilos da tela
// aqui ficam todas as estilizações da interface organizadas por sessão
const styles = StyleSheet.create({
  screen: {
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

  // logo
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

  // item ativo
  menuActive: {
    backgroundColor: '#E9F7F5',
  },

  // ícone menu
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

 // área principal onde fica todo o conteúdo da tela
  content: {
    flex: 1,
  },

  // conteúdo scrollável
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 28,
    paddingBottom: 32,
  },

  scrollContentDesktop: {
    paddingHorizontal: 28,
    paddingTop: 42,
    paddingBottom: 40,
  },

  // círculo decorativo
  decorCircleOne: {
    position: 'absolute',
    width: 310,
    height: 310,
    borderRadius: 155,
    backgroundColor: '#DCEFEB',
    opacity: 0.55,
    left: -120,
    top: 130,
  },

  // círculo decorativo
  decorCircleTwo: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#E3F3EF',
    opacity: 0.75,
    right: -90,
    top: 250,
  },

  // círculo decorativo
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

  // ponto decorativo 1
  decorDotOne: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EAF6F2',
    top: 52,
    left: '58%',
  },

  // ponto decorativo 2
  decorDotTwo: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#CBE6DF',
    top: 300,
    left: 40,
  },

  // ponto decorativo 3
  decorDotThree: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D4ECE6',
    top: 350,
    left: 72,
  },

  // ponto decorativo 4
  decorDotFour: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#E1F2EE',
    top: 120,
    right: 110,
  },

  // cabeçalho da tela
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 24,
  },

  // cabeçalho da tela no mobile
  headerMobile: {
    marginTop: 22,
    alignItems: 'flex-start',
  },

  // botão pequeno usado para ícones no cabeçalho
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DCEBE7',
    shadowColor: '#6B8F86',
    shadowOpacity: 0.07,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  // área que organiza os textos do cabeçalho
  headerTextBox: {
    flex: 1,
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 10
  },

  // título principal da página
  pageTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#17262F',
  },

  // subtítulo exibido abaixo do título principal
  pageSubtitle: {
    fontSize: 15,
    color: '#6B7C86',
    marginTop: 10,
    lineHeight: 21,
    fontWeight: '400',
  },

  // card principal que contém o formulário
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    padding: 22,
    shadowColor: '#6B8F86',
    shadowOpacity: 0.07,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  // cabeçalho interno do card
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 22,
  },

  // círculo do ícone exibido no card
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DCEFEB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // título do card
  cardTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#087A73',
  },

  // subtítulo do card
  cardSubtitle: {
    fontSize: 13,
    color: '#6B7C86',
    marginTop: 2,
  },

  // grid principal que organiza os campos
  grid: {
    gap: 14,
  },

  // organização dos campos no desktop
  gridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 18,
    rowGap: 16,
  },

  // estrutura padrão de cada campo
  field: {
    width: '100%',
  },

  // largura dos campos no desktop
  fieldDesktop: {
    width: '48.8%',
  },

  // texto de identificação dos campos
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#17262F',
    marginBottom: 8,
  },

  // campo padrão de digitação
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#17262F',
    justifyContent: 'center',
  },

    inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },


  // texto exibido dentro do campo de data
  dateText: {
    fontSize: 14,
    color: '#17262F',
  },

  // área das observações
  obsBox: {
    marginTop: 16,
  },

  // campo de texto grande para observações
  textArea: {
    minHeight: 100,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingTop: 14,
    fontSize: 15,
    color: '#17262F',
    textAlignVertical: 'top',
    fontWeight: '400',
  },

  // contador de caracteres das observações
  counter: {
    fontSize: 12,
    color: '#7E8D9B',
    marginTop: 8,
  },

  // bloco do agendamento automático
  autoBlock: {
    marginTop: 20,
    minHeight: 78,
    borderRadius: 14,
    backgroundColor: '#EEF8F4',
    borderWidth: 1,
    borderColor: '#D6EDE5',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },

  // área dos textos do agendamento automático
  autoTextBox: {
    flex: 1,
  },

  // título do bloco automático
  autoTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#17262F',
  },

  // subtítulo do bloco automático
  autoSubtitle: {
    fontSize: 13,
    color: '#61717B',
    marginTop: 3,
  },

  // linha que organiza os botões
  buttonsRow: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },

  // organização dos botões no mobile
  buttonsMobile: {
    flexDirection: 'column-reverse',
  },

  // botão de cancelar
  cancelButton: {
    minHeight: 52,
    borderRadius: 12,
    paddingHorizontal: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCEBE7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  // texto do botão cancelar
  cancelText: {
    fontSize: 15,
    color: '#60768A',
    fontWeight: '500',
  },

  // botão principal de salvar
  saveButton: {
    minHeight: 52,
    borderRadius: 12,
    paddingHorizontal: 22,
    backgroundColor: '#087A73',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  // texto do botão salvar
  saveText: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '500',
  },

    selectHighZ: {
    zIndex: 99999,
    elevation: 999,
  },
});