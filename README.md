<h2 align="center">
Teste técnico NeoPro - Backend
</h2>

## API Restful com Node.js, Express, Typescript
## Técnologias utilizadas
Back-end:
```
Nodejs, ExpressJs, Typescript
```


## Instalando as Dependências
Faça um clone deste repositório e instale no seu ambiente de desenvolvimento usando o seguinte comando no seu terminal (escolha um diretório apropriado):

```
https://github.com/caiocapua/mtg-api
```

Após clonar o conteúdo do repositório, acesse o diretório criado e efetue a instalação das dependências:

```
cd mtg-api

yarn

# ou

npm install
```
## Executando aplicação
Rodandos os containers com docker compose
```
docker-compose up
```

Ao finalizar a execução dos containers pode acessar `http://localhost:8000/` para ter acesso ao banco

É necessário utilizar o insomonia ou postman para as rotas

Caso não queira utilizar o docker compose, basta alterar o arquivo index do typeorm,  host:db para host:localhost

Nessa caso, será necessário a instalação do postgres na maquina ou um container

Após a finalização da etapa acima, basta rodar:

```
yarn dev
```
