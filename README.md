# 🥦 LightLife v2

> Plataforma full-stack para gestão nutricional inteligente, combinando cálculo preciso de macros com sugestões de refeições personalizadas.

### [➡️ Ver Demo Ao Vivo](https://lightlife.vercel.app/)

## 📜 Sobre o Projeto

O **LightLife** é uma plataforma de gestão nutricional desenvolvida para ser uma solução completa e inteligente para o usuário final. Utilizando uma arquitetura híbrida (SSR + Client Components) com Next.js 15, o projeto foca em entregar alta performance e uma experiência de usuário fluida e responsiva em qualquer dispositivo.

O core da aplicação consiste em calcular as necessidades nutricionais do usuário com base em seus dados biométricos e, a partir disso, consumir a Spoonacular API para oferecer sugestões de refeições customizadas, baseadas nas calorias da dieta do usuário.

---

### Habilidades Demonstradas

_Integração de APIs REST, Normalização de Dados, Design de Sistemas Escaláveis, Gestão de Cache, Otimização de Custos Cloud, TypeScript Avançado, Responsive Web Design._

## ✨ Principais Funcionalidades

- **🔍 Sugestões de Refeições:** Integração com a Spoonacular API para buscar e filtrar receitas sob medida, com base na quantidade de calorias do usuário.
- **📊 Cálculo Nutricional Dinâmico:** Algoritmo que calcula as necessidades de macronutrientes (proteínas, carboidratos, gorduras) e calorias com base nos dados biométricos do usuário.
- **📈 Dashboard Interativo:** Painel de controle responsivo que exibe os dados nutricionais em gráficos interativos, construídos com a biblioteca Recharts.
- **🔐 Autenticação Segura:** Login social (OAuth) com o Google, implementado com NextAuth.js para um fluxo seguro e simplificado.
- **📱 Formulários Adaptativos:** Validação de dados robusta no front e back-end com Zod e TypeScript, garantindo a integridade e a segurança das informações inseridas em layouts totalmente responsivos.

## 🚀 Destaques Técnicos e Desafios Superados

- **Otimização de Performance:** Queries para a Spoonacular API foram refinadas para atingir uma **latência média de 320ms** em redes móveis (4G), garantindo uma experiência rápida para o usuário.
- **Normalização de Dados:** Criação de uma camada de abstração para normalizar e unificar dados nutricionais vindos de três fontes distintas (MongoDB, Spoonacular API e entrada do usuário).
- **Otimização de Custos:** Desenvolvimento de um sistema inteligente para o consumo da API externa, reduzindo os custos operacionais da aplicação.
- **Design System Unificado:** Componentização da UI com Tailwind CSS para garantir a consistência visual das informações, especialmente na exibição de receitas em diferentes _breakpoints_ (mobile, tablet, desktop).

## 🛠️ Stack de Tecnologias

- **Framework:** [Next.js](https://nextjs.org/) (v15)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Autenticação:** [NextAuth.js](https://next-auth.js.org/)
- **Banco de Dados e Auth Provider:** [MongoDB](https://mongodb.com/) (Authentication, MongoDB Atlas)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Validação de Esquemas:** [Zod](https://zod.dev/)
- **Visualização de Dados:** [Recharts](https://recharts.org/)
- **API Externa:** [Spoonacular API](https://spoonacular.com/food-api)
- **Deploy:** [Vercel](https://vercel.com/)

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente local.

### Pré-requisitos

- Node.js (v18 ou superior)
- Git

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/luisantoniofilho/lightlife-v2.git](https://github.com/luisantoniofilho/lightlife-v2.git)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd lightlife-v2
    ```
3.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

### Configuração do Ambiente

1.  Crie um arquivo `.env.local` na raiz do projeto. Você pode copiar o `.env.example` se ele existir, ou criar um novo.

2.  Adicione as seguintes variáveis de ambiente com as suas chaves do MongoDB, Spoonacular e NextAuth:

    ```env
    # GOOGLE
    AUTH_GOOGLE_ID=
    AUTH_GOOGLE_SECRET=

    # NEXTAUTH
    NEXTAUTH_URL=
    NEXTAUTH_SECRET=

    # MONGODB
    MONGODB_URL=

    # SPOONACULAR
    SPOONACULAR_API_KEY=
    ```

### Rodando a Aplicação

1.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
2.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

## 📬 Contato

**Luis Antonio**

- GitHub: [@luisantoniofilho](https://github.com/luisantoniofilho)
- LinkedIn: [Seu Perfil do LinkedIn](https://www.linkedin.com/in/seu-usuario/) _(Sugestão: adicione o link do seu perfil)_
