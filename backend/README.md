
# Backend | John Doe Colors

Projeto de backend do desafio da eteg.
Utilizando NodeJs, Express, Typescript, Zod, Prisma.


## Documentação da API


#### Healthcheck

```http
  GET /
```
    
retorna uma mensagem avisando que o servidor está rodando.

#### Cadastro da cor predileta do usuário

```http
  POST /colors
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `cpf` | `string` | **Obrigatório**. Deve conter os 11 digitos e é unico no banco de dados |
| `name` | `string` | **Obrigatório** |
| `email` | `string` | **Obrigatório**. |
| `color` | `string` | **Obrigatório**. Deve estar em formato de hexadecimal ex.: #7159c1 |



## Instalação

Inicialize o banco de dados postgres:

```bash
docker run -p 5432:5432 -e POSTGRES_DB=johndoe-colors -e POSTGRES_USER=johndoe -e POSTGRES_PASSWORD=randompassword --name johndoe-postgres -d postgres
```

e então instale as dependências do projeto

```bash
  pnpm install
```

é necessário ter o banco de dados rodando, pois está configurado para que após a instalação das dependências o projeto execute os seguintes comandos:

```bash
pnpx prisma generate
pnpx prisma migrate deploy
```

preparando o banco de dados e o prisma para executar corretamente suas funções.

## Rodando o projeto

Para roda o projeto em modo de desenvolvimento, execute:

```bash
pnpm dev
```

e para executa-lo em modo de produção: 
```bash
pnpm build && pnpm start
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`NODE_ENV`
`POSTGRES_USER`
`POSTGRES_PASSWORD`
`POSTGRES_DB`
`DATABASE_URL`

