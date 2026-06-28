# 📋 To-Do List — Frontend

Interface web para o gerenciamento de tarefas pessoais, desenvolvida com React e integrada à [To-Do List API](https://github.com/GuSalesDev/todoapi).

## 🌐 Demo

https://todoapi-frontend-production.up.railway.app

## 🚀 Tecnologias

- React 19
- Vite 8
- Axios
- CSS puro

## 📁 Estrutura do Projeto

```
src/
├── pages/
│   ├── Login.jsx      # Tela de login
│   ├── Register.jsx   # Tela de cadastro
│   └── Tasks.jsx      # Tela de tarefas
├── services/
│   └── api.js         # Configuração do Axios
├── App.jsx            # Componente principal e roteamento
├── App.css            # Estilos globais
└── main.jsx           # Ponto de entrada
```

## ⚙️ Como rodar localmente

### Pré-requisitos

- Node.js 18+
- API backend rodando ([repositório](https://github.com/GuSalesDev/todoapi))

### 1. Clone o repositório

```bash
git clone https://github.com/GuSalesDev/todoapi-frontend.git
cd todoapi-frontend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure a URL da API

Abre o arquivo `src/services/api.js` e ajusta o `baseURL` para a URL da sua API:

```javascript
const api = axios.create({
  baseURL: 'http://localhost:8080', // local
  // baseURL: 'https://todoapi-production-79c3.up.railway.app', // produção
});
```

### 4. Rode o projeto

```bash
npm run dev
```

Acessa **http://localhost:5173** no navegador.

---

## 🖥️ Funcionalidades

- **Cadastro** — criação de conta com nome, e-mail e senha
- **Login** — autenticação com retorno de token JWT
- **Listagem de tarefas** — exibe todas as tarefas do usuário logado
- **Criar tarefa** — adiciona nova tarefa com título e descrição opcional
- **Concluir/Desfazer** — alterna o status da tarefa
- **Deletar** — remove uma tarefa
- **Logout** — encerra a sessão limpando o token

## 🔐 Autenticação

O token JWT retornado pela API é armazenado no `localStorage` e enviado automaticamente em todas as requisições protegidas via interceptor do Axios.

---

## 🔗 Repositórios

- **Backend:** [GuSalesDev/todoapi](https://github.com/GuSalesDev/todoapi)
- **Frontend:** [GuSalesDev/todoapi-frontend](https://github.com/GuSalesDev/todoapi-frontend)

---

## 👨‍💻 Autor

Feito por **Gustavo Sales** — estudante de Análise e Desenvolvimento de Sistemas com foco em desenvolvimento back-end Java.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Gustavo%20Sales-blue?style=flat&logo=linkedin)](www.linkedin.com/in/gustavo-salesdev)
[![GitHub](https://img.shields.io/badge/GitHub-GuSalesDev-black?style=flat&logo=github)](https://github.com/GuSalesDev)
