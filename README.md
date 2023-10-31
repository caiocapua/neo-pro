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
https://github.com/caiocapua/neo-pro
```

Após clonar o conteúdo do repositório, acesse o diretório criado e efetue a instalação das dependências:

```
cd neo-pro

yarn

# ou

npm install
```
## Executando aplicação

É necessário utilizar o insomonia ou postman para as rotas

Após a finalização da etapa acima, basta rodar:

```
yarn dev
```

## Rotas da aplicação

É necessário utilizar o insomonia ou postman para as rotas

Com o servidor rodando para utilizar a rota abaixo:

```
http://localhost:3333/compact
```

## Retorno
Ao executar a rota, você irá receber o seguinte retorno:

```
{
	"process": {
		"compress": [
			{
				"compressedString": "9c7t7p6h2f",
				"compressionRate": 32.25806451612903
			},
			{
				"compressedString": "8g7s6p4s4y",
				"compressionRate": 34.48275862068966
			},
			{
				"compressedString": "9y9s8j7y7j",
				"compressionRate": 25
			},
			{
				"compressedString": "10s10y9w7q5y",
				"compressionRate": 29.268292682926827
			},
			{
				"compressedString": "10u9h9x6f5c",
				"compressionRate": 28.205128205128204
			}
		],
		"decompress": [
			"ccccccccctttttttppppppphhhhhhff",
			"ggggggggsssssssppppppssssyyyy",
			"yyyyyyyyysssssssssjjjjjjjjyyyyyyyjjjjjjj",
			"ssssssssssyyyyyyyyyywwwwwwwwwqqqqqqqyyyyy",
			"uuuuuuuuuuhhhhhhhhhxxxxxxxxxffffffccccc"
		]
	}
}
```