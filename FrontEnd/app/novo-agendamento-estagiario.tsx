// arquivo app/novo-agendamento-estagiario.tsx

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
  // botão com clique e efeito ao toque
  Text,
  // inserir nomes e dados
  TextInput,
  // componente base de estrutura e layout
  TouchableOpacity,
  View,
  // hook que pega largura e altura da tela em tempo real
  // usado para responsividade entre mobile e desktop 
  useWindowDimensions,
} from 'react-native';

// router pra navegação entre telas
import { router } from 'expo-router';

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

// componente para aparecer o calendario no dispositivo mobile
import { Platform } from 'react-native';

// opcoes do sidebar do estagiario
const menuItems = [
  ['calendar-outline', 'Agenda', '/(tabs)'],
  ['people-outline', 'Pacientes', '/(tabs)/pacientes'],
  ['business-outline', 'Salas', '/(tabs)/salas'],
  ['notifications-outline', 'Notificacoes', '/(tabs)/notificacoes'],
  ['person-outline', 'Perfil', '/(tabs)/perfil'],
];

// tela de novo agendamento de estagiario
export default function NovoAgendamentoEstagiarioScreen() {

  // pega a largura da tela pra responsividade
  const { width } = useWindowDimensions();

  // considera se é mobile quando a tela é menor que 900
  const isDesktop = width >= 900;
  
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

  // armazena a sala escolhida para o atendimento
  const [sala, setSala] = useState('');

  // guarda a data formatada exibida no campo
  const [data, setData] = useState('12/06/2026');

  // armazena as observações digitadas pelo usuário
  const [observacoes, setObservacoes] = useState('');

  // controla se o agendamento automático está ativado
  const [automatico, setAutomatico] = useState(true);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());

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
      colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']}
      style={styles.background}
    >

      {/* sidebar aparece apenas no desktop */}
      <View style={styles.backgroundDecor}>
        <View style={styles.blurCircleOne} />
        <View style={styles.blurCircleTwo} />
        <View style={styles.blurCircleThree} />
      </View>

      {/* container principal da pagina */}
      <View style={styles.screen}>

        {/* sidebar desktop */}
        {isDesktop && (
          <View style={styles.sidebar}>

            {/* área da logo */}
            <View style={styles.logoBox}>
              <Text style={styles.psi}>Ψ</Text>

              <View>
                <Text style={styles.logoText}>SEP</Text>

                <Text style={styles.logoSub}>Clínica de Psicologia</Text>
              </View>
            </View>

            {/* menu lateral */}
            <View style={styles.menuArea}>
              {menuItems.map(([icon, label, path]) => (
                <TouchableOpacity
                  key={label}
                  style={[
                    styles.menuItem,
                    label === 'Agenda' && styles.menuActive,
                  ]}
                  onPress={() => router.push(path as any)}
                >

                  <Ionicons name={icon as any} size={20} color={ label === 'Agenda' ? '#0C706E' : '#70808A'}/>

                  <Text
                    style={[ styles.menuText, label === 'Agenda' && styles.menuTextActive, ]} > {label} </Text>

                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* conteúdo */}
        <ScrollView
          style={styles.content} 
          contentContainerStyle={[styles.scrollContent, isDesktop && styles.scrollContentDesktop,]}
          showsVerticalScrollIndicator={false}
        >

          {/* topo da tela */}
          <View style={styles.headerTextBox}>

            <Text style={styles.pageTitle}>Novo Agendamento</Text>

            <Text style={styles.pageSubtitle}>Preencha as informações para criar um novo atendimento.</Text>
          </View>

          {/* card principal */}
          <View style={styles.formCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIcon}>
                <Ionicons
                  name="calendar-outline" size={22} color="#0C706E" />
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
                    {showDatePicker && ( <DateTimePicker value={selectedDate}
                    mode="date" display="default"
                    onChange={onChangeDate}/>
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
                <TouchableOpacity style={styles.saveButton} onPress={() => router.push('/agendamento-sucesso-estagiario')}>

                  {/* ícone do botão salvar */}
                  <Ionicons
                    name="checkmark-outline" size={20} color="#FFFFFF" />

                  {/* texto do botão salvar */}
                  <Text style={styles.saveText}>Salvar agendamento</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
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

  // estrutura principal da tela
  // define layout horizontal entre sidebar e conteúdo
  screen: {
    flex: 1,
    flexDirection: 'row',
  },

  // camada de fundo decorativa
  // usada para elementos visuais absolutos
  backgroundDecor: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },

  // círculo decorativo superior esquerdo
  blurCircleOne: {
    position: 'absolute',
    width: 420,
    height: 420,
    borderRadius: 210,
    backgroundColor: 'rgba(12,112,110,0.08)',
    top: -120,
    left: -120,
  },

  // círculo decorativo inferior direito
  blurCircleTwo: {
    position: 'absolute',
    width: 520,
    height: 520,
    borderRadius: 260,
    backgroundColor: 'rgba(166,189,184,0.18)',
    right: -180,
    bottom: -160,
  },

  // círculo decorativo superior direito
  blurCircleThree: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(255,255,255,0.7)',
    right: 100,
    top: 120,
  },

  // menu lateral da aplicação
  sidebar: {
    width: 245,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E6ECEA',
  },

  // área da logo no topo da sidebar
  logoBox: {
    height: 118,
    backgroundColor: '#0C706E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 10,
    borderBottomRightRadius: 18,
  },

  // símbolo psi da clínica
  psi: {
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  // texto principal da logo
  logoText: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  // subtítulo da logo
  logoSub: {
    fontSize: 12,
    color: '#EAF6F2',
    marginTop: 2,
  },

  // área dos itens do menu lateral
  menuArea: {
    paddingTop: 18,
  },

  // item individual do menu
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginHorizontal: 12,
    borderRadius: 12,
    marginTop: 4,
  },

  // estilo do item ativo do menu
  menuActive: {
    backgroundColor: '#EAF6F2',
  },

  // texto padrão do menu
  menuText: {
    fontSize: 15,
    color: '#4B5F68',
    fontWeight: '400',
  },

  // texto do item ativo do menu
  menuTextActive: {
    color: '#0C706E',
    fontWeight: '600',
  },

  // área principal de conteúdo
  content: {
    flex: 1,
  },

  // espaçamento interno do ScrollView
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 80,
  },

  // espaçamento do conteúdo no desktop
  scrollContentDesktop: {
    paddingHorizontal: 32,
    paddingTop: 42,
  },

  // bloco de texto do cabeçalho
  headerTextBox: {
    marginBottom: 24,
    marginTop: 10
  },

  // título principal da página
  pageTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#17262F',
  },

  // subtítulo da página
  pageSubtitle: {
    fontSize: 15,
    color: '#6B7C86',
    marginTop: 8,
    lineHeight: 22,
  },

  // card principal do formulário
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E0E9E6',
    padding: 22,
    overflow: 'visible',
  },

  // cabeçalho do card
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 22,
  },

  // ícone circular do card
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EAF6F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // título do card
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#17262F',
  },

  // subtítulo do card
  cardSubtitle: {
    fontSize: 13,
    color: '#6B7C86',
    marginTop: 3,
  },

  // grid principal dos campos
  grid: {
    gap: 14,
    overflow: 'visible',
  },

  // grid adaptado para desktop
  gridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'visible',
  },

  // container padrão de campo
  field: {
    width: '100%',
  },

  // largura do campo em desktop
  fieldDesktop: {
    width: '48.5%',
    position: 'relative',
  },

  // prioridade de camada para selects
  selectHighZ: {
    zIndex: 99999,
    elevation: 999,
  },

  // texto label dos campos
  label: {
    fontSize: 14,
    color: '#17262F',
    marginBottom: 8,
    fontWeight: '500',
  },

  // input padrão
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#17262F',
    flexDirection: 'row',
    alignItems: 'center',
  },

  // conteúdo interno do input
  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  // texto da data
  dateText: {
    fontSize: 14,
    color: '#17262F',
  },

  // campo de texto multilinha
  textArea: {
    minHeight: 100,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    paddingHorizontal: 14,
    paddingTop: 14,
    fontSize: 15,
    color: '#17262F',
    textAlignVertical: 'top',
    backgroundColor: '#FFFFFF',
  },

  // bloco do switch automático
  autoBlock: {
    zIndex: 1,
    elevation: 1,

    marginTop: 24,
    backgroundColor: '#EEF8F4',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D6EDE5',
    padding: 16,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // área textual do automático
  autoTextBox: {
    flex: 1,
  },

  // título do automático
  autoTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#17262F',
  },

  // subtítulo do automático
  autoSubtitle: {
    fontSize: 13,
    color: '#61717B',
    marginTop: 3,
  },

  // linha de botões
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

  // botão cancelar
  cancelButton: {
    minHeight: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    paddingHorizontal: 22,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,

    backgroundColor: '#FFFFFF',
  },

  // texto do botão cancelar
  cancelText: {
    fontSize: 15,
    color: '#60768A',
    fontWeight: '500',
  },

  // botão salvar
  saveButton: {
    minHeight: 52,
    borderRadius: 12,
    backgroundColor: '#0C706E',
    paddingHorizontal: 22,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  // texto do botão salvar
  saveText: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});