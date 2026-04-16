# Olos Agent SDK Docs

Documentação do Olos Agent SDK, Chat e Softphone Web para desenvolvedores.

🌐 **Produção:** [agent-sdk-docs.vercel.app](https://agent-sdk-docs.vercel.app/)

## Tecnologias

- [Next.js](https://nextjs.org/) 16
- [Nextra](https://nextra.site/) 2 — framework de documentação
- [React](https://react.dev/) 18

## Idiomas

- 🇧🇷 Português (padrão)
- 🇪🇸 Español
- 🇺🇸 English

## Pré-requisitos

- Node.js >= 20
- Yarn

## Desenvolvimento

```bash
# Instalar dependências
yarn install

# Iniciar servidor de desenvolvimento
yarn dev
```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

## Build

```bash
yarn build
yarn start
```

## Estrutura

```
pages/
├── agent-sdk/    # Documentação do Agent SDK (eventos, métodos, fluxos)
├── chat/         # Documentação do Chat
└── softphone-web/# Documentação do Softphone Web
```

## Deploy

O deploy é feito automaticamente via [Vercel](https://vercel.com) a cada push na branch principal.

