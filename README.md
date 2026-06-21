# G.A.M.E.R Technologies

**Gestão. Automação. Modernização. Eficiência. Resiliência.**

## Visão geral

G.A.M.E.R Technologies é uma aplicação web híbrida para gestão corporativa, análise de dados e suporte virtual. O projeto reúne uma interface institucional, recursos de autenticação e ferramentas de análise com gráficos dinâmicos.

## Funcionalidades principais

- Cadastro e login de usuário
- Recuperação de senha via backend
- Dashboard de métricas financeiras com Chart.js
- Assistente virtual integrado com API de linguagem generativa
- Navegação fluida entre páginas e interface responsiva

## Estrutura do projeto

- `index.html` - Página inicial e navegação
- `src/` - Front-end principal
  - `src/chatbot.html` - Interface do chatbot
  - `src/login.html` - Tela de cadastro
  - `src/loginn.html` - Tela de login
  - `src/subpages/passForget.html` - Recuperação de senha
  - `src/analises/analises.html` - Página de análises e gráficos
  - `src/js/` - Scripts de front-end
    - `chart.js` - Criação e atualização de gráficos
    - `loginn.js` - Fluxo de login e notificações por EmailJS
    - `passrec.js` - Fluxo de recuperação de senha
    - `swup.js` - Navegação dinâmica sem recarregar páginas
  - `src/chatbot.js` - Conexão com a API de assistente virtual da Google
  - `src/main.js` - Comportamento de navegação e seleção de país
- `Backend/login.js` - API Express com rotas de usuário e MongoDB
- `package.json` - Dependências e scripts do projeto
- `manifest.json` - Configurações de PWA

## Tecnologias utilizadas

- Node.js
- Vite
- Express
- MongoDB / Mongoose
- Chart.js
- Axios
- EmailJS Browser
- Google Generative Language API
- SWUP
- Bootstrap Icons
- CSS customizado

## Pré-requisitos

- Node.js instalado
- MongoDB disponível localmente ou remotamente
- Chave de API Google Generative Language

## Configuração do ambiente

Crie um arquivo `.env` na raiz do projeto com as variáveis abaixo:

```env
MONGO="mongodb://localhost:27017/gamerBank"
API=3000
VITE_TECHNOBOTKEY=SEU_API_KEY_GOOGLE
```

> Substitua `SEU_API_KEY_GOOGLE` pela chave válida da API Generative Language.

## Instalação e execução

1. Instale as dependências:

```bash
npm install
```

2. Inicie o backend Express:

```bash
node Backend/login.js
```

3. Inicie o front-end com Vite:

```bash
npm run dev
```

4. Abra a URL exibida pelo Vite no navegador.

## Rotas principais da API

- `GET /Users` - Lista todos os usuários
- `GET /Users/:email` - Consulta usuário por email
- `POST /cadastro` - Cria novo usuário
- `POST /login` - Autentica usuário
- `PATCH /rec` - Atualiza senha de usuário
- `DELETE /Users/:id` - Remove usuário por ID

## Observações de segurança

- Atualmente não há hashing de senha; recomenda-se implementar bcrypt ou similar antes de usar em produção.
- O backend não usa tokens JWT nem controle de sessão.
- O `.env` está no `.gitignore` para proteger credenciais.
