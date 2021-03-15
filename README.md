# Debits Backend

A aplicação consiste em um backend para uma aplicação web que permite que um usuário faça o gerencimento básico de dívidas (CRUD).

Um dos objetivos da aplicação também consiste em assegurar que o desenvolvedor responsável possui conhecimentos e habilidades para o bom desenvolvimento de uma api rest com NodeJs.

## Nota de versões:
O projeto está configurado com docker edocker e utiilza as imagens:

* Node 14.15.0-alpine3.11
* PostgreSQL - latest

A aplicação foi desenvolvida utilizando typescript na versão 4.2.3

## Começando

É necessário apenas ter o docker e o docker-compose instalados.
As versões utilizadas no desenvolvimento:

- docker version 19.03.13, build 4484c46d9d
- docker-compose version 1.25.0, build unknown

Certificado de que ambos estão instalados, na raiz do projeto execute o comando:
```
  docker-compose up --build
```
OBS: É necessário dar permissão para o usuário do computador acessar o diretório .docker na raiz do projeto.
pois sem permissão o docker não conseguirá executar o script de inicialização do server e nem criar o volume para o banco de dados.

O docker irá baixar as imagens que não possuir localmente, executará o container do postgres, após, irá recuperar as dependências do projeto, executará as migrations com sequelize e então subirá o server localmente de forma automática.
No fim terá uma saída semelhante à "SERVER ONLINE ON PORT 3001!".

Bem sucedido o processo de build e iniciado os containers, já pode consumir as rotas através da http://localhost:3001/api. <br />
Como o backend possui apenas recursos básicos para consumir dados relacionados às dívidas cadastradas, cada verbo http corresponde uma uma rota

GET = (http://localhost:3001/api/) - Retorna uma listagem de dívidas <br />
GET = (http://localhost:3001/api/?id=[some_id]) - Retorna uma dívida pelo id <br />
POST = (http://localhost:3001/api/) - Rota para persistir uma nova dívida <br />
PUT = (http://localhost:3001/api/[some_id]) -  Rota para atualizar uma dívida <br />
DELETE = (http://localhost:3001/api/[some_id]) - Rota para excluir uma dívida <br />

## Autor

* **David Ferreira**
