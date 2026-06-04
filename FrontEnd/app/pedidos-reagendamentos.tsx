// arquivo app/solicitacao-reagendamentos.tsx

// importação principal do React
import React from 'react';

// componentes nativos
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

// router para navegação
import { router } from 'expo-router';

// fundo degradê
import { LinearGradient } from 'expo-linear-gradient';

// lista simulada de notificações
const notificacoes = [
  {
    paciente: 'Ana Silva',
    estagiario: 'Carlos Oliveira',
    dataAtual: '12/06/2026',
    novaData: '19/06/2026',
    novoHorario: '12:00',
    motivo: 'Paciente estará viajando',
  },
  {
    paciente: 'Lucas Mendes',
    estagiario: 'Fernanda Souza',
    dataAtual: '14/06/2026',
    novaData: '21/06/2026',
    novoHorario: '12:00',
    motivo: 'Conflito de horário escolar',
  },
  {
    paciente: 'Maria Clara',
    estagiario: 'João Pedro',
    dataAtual: '18/06/2026',
    novaData: '25/06/2026',
    novoHorario: '12:00',
    motivo: 'Consulta médica',
  },
];
// tela principal
export default function SolicitacaoReagendamentosScreen() {
  return (
    // fundo da tela
    <LinearGradient
      colors={['#F7FCFA', '#EEF8F5', '#F9FCFB']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      {/* estrutura principal */}
      <View style={styles.container}>
        {/* sidebar */}
        <View style={styles.sidebar}>

          {/* logo */}
          <View style={styles.logoBox}>
            <Text style={styles.psi}>Ψ</Text>
            <View>
              <Text style={styles.logoText}>SEP</Text>
              <Text style={styles.logoSub}>Clínica de Psicologia</Text>
            </View>
          </View>

          {/* menu */}
          <View style={styles.menuArea}>
            <TouchableOpacity style={[styles.menuItem, styles.menuActive,]}>

              <Image
                source={require('../assets/images/reagendamento.png')}
                style={styles.menuIcon}
              />

              <Text style={[styles.menuText, styles.menuTextActive,]}>Pedidos reagendamento</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* conteúdo principal*/}
        <ScrollView contentContainerStyle={styles.scrollContent}>

          {/* cabeçalho */}
          <View style={styles.header}>
            <Text style={styles.title}>Solicitações de Reagendamento</Text>

            <Text style={styles.subtitle}>
              Solicitações enviadas pelos estagiários aguardando análise.</Text>

            {/* contador de notificações */}
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>
                {notificacoes.length}
              </Text>
            </View>
          </View>

          {/* cards */}
          {notificacoes.map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.patientName}>
                  {item.paciente}
                </Text>

                <View style={styles.pendingBadge}>
                  <Text style={styles.pendingText}>Pendente</Text>
                </View>
              </View>

              <Text style={styles.info}>
                Estagiário: {item.estagiario}</Text>

              <Text style={styles.info}>
                Data atual: {item.dataAtual}</Text>

              <Text style={styles.info}>
                Nova data desejada: {item.novaData}</Text>

              <Text style={styles.info}>
                Novo horário: {item.novoHorario}</Text>

              <Text style={styles.info}>
                Motivo da solicitação: {item.motivo}</Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  router.push('/reagendamento-administrador')}>
                <Text style={styles.buttonText}>Realizar Reagendamento</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

// estilos
const styles = StyleSheet.create({

  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
  },

  sidebar: {
    width: 270,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#DCEBE7',
    paddingTop: 28,
  },

  logoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 24,
    marginBottom: 36,
  },

  psi: {
    fontSize: 38,
    color: '#0C706E',
    fontWeight: '700',
  },

  logoText: {
    fontSize: 24,
    color: '#17262F',
    fontWeight: '700',
  },

  logoSub: {
    fontSize: 12,
    color: '#70808A',
  },

  menuArea: {
    paddingHorizontal: 16,
  },

  menuItem: {
    height: 50,
    borderRadius: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  menuActive: {
    backgroundColor: '#E9F7F5',
  },

  menuIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#0C706E',
  },

  menuText: {
    fontSize: 15,
    color: '#70808A',
  },

  menuTextActive: {
    color: '#0C706E',
    fontWeight: '600',
  },

  scrollContent: {
    flexGrow: 1,
    padding: 35,
  },

  header: {
    marginBottom: 30,
    position: 'relative',
  },

  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#17262F',
  },

  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: '#6B7C86',
  },

  notificationBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DCEBE7',
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  patientName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#17262F',
  },

  pendingBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },

  pendingText: {
    color: '#92400E',
    fontWeight: '600',
    fontSize: 12,
  },

  info: {
    fontSize: 14,
    color: '#6B7C86',
    marginBottom: 6,
  },

  button: {
    backgroundColor: '#0C706E',
    marginTop: 16,
    borderRadius: 12,
    paddingVertical: 14,
  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
  },
});