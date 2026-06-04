# Sistema Clínica SEP

## 📌 Sobre o Projeto

O **Sistema Clínica SEP** é uma aplicação desenvolvida para auxiliar na organização e gestão dos atendimentos realizados em uma clínica escola de psicologia. O sistema foi projetado para centralizar informações de pacientes, salas, agendamentos, cancelamentos, reagendamentos e acompanhamento clínico, proporcionando maior controle e eficiência aos processos administrativos e operacionais.

Desenvolvido utilizando **React Native**, **Expo** e **TypeScript**, o sistema possui uma interface moderna, intuitiva e responsiva, adaptando-se tanto para dispositivos móveis quanto para ambientes desktop.

O principal objetivo da aplicação é otimizar a gestão dos atendimentos, reduzir falhas operacionais e oferecer uma experiência prática e organizada para administradores e estagiários.

---

# Objetivos

## Objetivo Geral

Desenvolver um sistema clínico digital capaz de organizar e gerenciar informações relacionadas aos atendimentos, pacientes e recursos da clínica, promovendo eficiência, controle e acessibilidade.

## Objetivos Específicos

* Criar uma interface intuitiva e de fácil navegação;
* Organizar informações clínicas em telas estruturadas;
* Gerenciar pacientes e seus acompanhamentos;
* Controlar presenças, faltas e cancelamentos;
* Gerenciar solicitações de reagendamento;
* Exibir disponibilidade de salas;
* Disponibilizar áreas específicas para administradores e estagiários;
* Aplicar responsividade para diferentes dispositivos.

---

# Tecnologias Utilizadas

* React Native
* Expo
* Expo Router
* TypeScript
* JavaScript (ES6+)
* Expo Linear Gradient
* Expo Vector Icons (Ionicons)
* React Hooks
* React Native Web
* Componentização de Interface

---

# Estrutura do Projeto

O sistema foi desenvolvido seguindo o conceito de componentização, promovendo reutilização de código, padronização visual e facilidade de manutenção.

## Componentes e Recursos Utilizados

### Screen

Responsável pela estrutura base das telas.

### Sidebar

Menu lateral utilizado na versão desktop para navegação entre funcionalidades administrativas e operacionais.

### Cards de Informação

Componentes reutilizáveis para exibição de dados organizados.

### Hooks React

Utilizados para gerenciamento de estado e responsividade da interface.

### useWindowDimensions

Utilizado para adaptação dinâmica do layout conforme o tamanho da tela.

---

# Funcionalidades do Sistema

## Tela de Acesso

Permite a entrada do usuário no sistema.

### Funcionalidades

* Campos de usuário e senha;
* Interface intuitiva;
* Navegação entre áreas do sistema.

---

## Área Administrativa

A área administrativa concentra os principais recursos de gerenciamento da clínica.

### Funcionalidades

* Visualização de pacientes;
* Gerenciamento de salas;
* Controle de cancelamentos;
* Controle de reagendamentos;
* Cadastro de estagiários;
* Acompanhamento de frequência;
* Visualização detalhada de pacientes;
* Edição de informações dos pacientes;
* Gerenciamento do perfil administrativo.

---

## Tela de Pacientes

Responsável pelo gerenciamento das informações dos pacientes.

### Funcionalidades

* Listagem de pacientes;
* Visualização de detalhes;
* Edição de dados;
* Exibição de responsável para menores de idade;
* Informações de contato;
* Histórico de acompanhamento;
* Controle de presenças, faltas e cancelamentos.

---

## Tela de Detalhes do Paciente

Permite a visualização detalhada das informações do paciente.

### Informações Exibidas

* Dados básicos;
* Informações de contato;
* Responsável legal (quando aplicável);
* Situação atual do acompanhamento;
* Histórico resumido de atendimentos;
* Observações administrativas.

### Funcionalidades

* Edição de informações;
* Visualização de acompanhamento;
* Controle administrativo completo.

---

## Tela de Salas

Responsável pela organização das salas da clínica.

### Funcionalidades

* Listagem de salas;
* Visualização de horários;
* Status da sala:

  * Livre;
  * Ocupada;
  * Em manutenção.

---

## Tela de Cancelamentos

Responsável pelo gerenciamento das solicitações de cancelamento.

### Informações Exibidas

* Nome do paciente;
* Motivo do cancelamento;
* Quantidade de cancelamentos;
* Status da solicitação.

### Regras de Negócio

O sistema identifica pacientes que ultrapassaram o limite permitido de cancelamentos e sinaliza a situação para análise administrativa.

---

## Tela de Pedidos de Reagendamento

Permite ao administrador visualizar solicitações de reagendamento realizadas pelos estagiários.

### Informações Exibidas

* Paciente;
* Data original;
* Nova data solicitada;
* Motivo do reagendamento;
* Status da solicitação.

---

## Tela de Controle de Faltas

Responsável pelo monitoramento da frequência dos pacientes.

### Dados Apresentados

* Presenças;
* Faltas;
* Cancelamentos;
* Última consulta;
* Observações.

---

## Área do Estagiário

Área destinada aos estagiários responsáveis pelos atendimentos.

### Funcionalidades

* Agenda de atendimentos;
* Visualização de pacientes;
* Consulta de salas;
* Notificações do sistema;
* Perfil do usuário.

---

## Tela de Notificações

Responsável pela exibição de avisos e atualizações do sistema.

### Funcionalidades

* Avisos administrativos;
* Alertas importantes;
* Atualizações de atendimentos;
* Solicitações pendentes;
* Informações sobre pacientes e sessões.

---

# Interface e Experiência do Usuário

O sistema foi desenvolvido com foco em:

* Interface moderna e organizada;
* Navegação intuitiva;
* Utilização de cards informativos;
* Hierarquia visual clara;
* Tipografia legível;
* Indicadores visuais de status;
* Experiência consistente entre desktop e mobile.

---

# Responsividade

O sistema adapta automaticamente sua interface conforme o tamanho da tela.

## Recursos de Responsividade

* Layout adaptado para dispositivos móveis;
* Layout adaptado para desktop;
* Sidebar exclusiva para telas maiores;
* Organização dinâmica de grids e cards;
* Centralização inteligente de conteúdo;
* Barras de rolagem implementadas em todas as telas;
* Melhor aproveitamento do espaço disponível.

---

# Melhorias Futuras

* Integração com banco de dados;
* Sistema de autenticação real;
* Controle de acesso por permissões;
* Dashboard com indicadores e gráficos;
* Relatórios em PDF;
* Upload de documentos;
* Sistema de busca avançada;
* Notificações em tempo real;
* Histórico completo de atendimentos;
* Integração com API própria.

---

# Autoria

Projeto desenvolvido como atividade acadêmica na área de Tecnologia da Informação, com participação de **Kaylane Coutinho** no desenvolvimento das interfaces, responsividade, estrutura visual e funcionalidades do sistema.

---

# Considerações Finais

O desenvolvimento do Sistema Clínica SEP possibilitou a aplicação prática de diversos conceitos fundamentais da área de desenvolvimento de software, incluindo:

* Desenvolvimento Mobile;
* Desenvolvimento Web;
* Componentização;
* Responsividade;
* Organização de código;
* Estruturação de interfaces;
* Implementação de regras de negócio;
* Experiência do usuário (UX);
* Design de interfaces (UI).

O projeto contribui para a modernização dos processos internos da clínica, proporcionando uma solução digital organizada, escalável e alinhada às necessidades do ambiente acadêmico e profissional.
