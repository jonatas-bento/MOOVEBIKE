# MOOVEBIKE

Projeto final do curso de Desenvolvimento Web Full Stack da instituição Digital House Coding School.(https://www.digitalhouse.com/br/)

MOOVEBIKE comercializa planos de aluguel de bicicletas pelo web site com entrega e recebimento das bicicletas na rede de lojas físicas.

Os planos comercializados:

| Planos      | Período |
| ----------- | ------- |
| Diário      | Diário  |
| Relax       | Semanal |
| Moove       | Mensal  |
| Super Moove | Anual   |

Os modelos de bicicletas: tradicional e elétrica.

### Regras do négocio

- Cada usuário pode ter apenas um plano ativo.
- Se o cliente entregar a bicicleta antes do prazo de devolução, o plano ficará inativo.

### Fluxo do usuário

- Cadastro no site
- Escolha e compra do plano
- Retirada da bicicleta na loja física
- Informações sobre o plano adquirido disponíveis na página "Reservas".

### Fluxo administrativo

O sistema disponibiliza área administrativa, com login na mesma página dos demais usuários, com 4 funcionalidades:

1) Ativação de plano:  ocorre na retirada da bike 
2) Desativação de plano: ocorre na entrega da bike
3) Listagem de usuários
4) Listagem de planos inativos

Obs: Se houver multa por atraso o pagamento é feito na loja, antes da desativação do plano.

## Tecnologias

- [Express](https://expressjs.com/pt-br/)
- [Ejs](https://ejs.co/)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [MySQL](https://www.mysql.com/)
- [Sequelize ORM](https://sequelize.org/master/)

## Como utilizar

### Pré Requisito

Para usar este repositório, você precisa instalar:

NodeJS
NPM
MySQL
Sequelize ORM

### Ambiente de desenvolvimento

Clonar o projeto

```
git clone https://github.com/jonatas-bento/MOOVEBIKE.git
```

Criar arquivo .env na raiz do projeto e configurar as variáveis de ambiente
(A descrição das variáveis necessárias estão no arquivo .env.example)

Instalar os pacotes com npm

```
$ npm install
```

Conectar o banco de dados e criar um schema com o nome moove_bike

Executar migration

```
$ npx sequelize-cli db:migrate
```

Cadastrar os administradores no arquivo ('src', 'database', 'seeders', '20210705135420-demo-admins').
A senha deve estar criptografada. Ver arquivo ('src', 'libs', 'crypto').

Popular o banco de dados

```
$ npx sequelize-cli db:seed:all
```

Executar a aplicação localmente

```
$ npm run dev
```

Navegador (xxxx: porta configurada na variável de ambiente.)

```
localhost:xxxx
```
## Projeto

[Clique neste link](http://moovebike.app.br/)

## Membros

- [Anne Bortoli](https://github.com/ANNEBORTOLI) 
- [Flávio Sipoli](https://github.com/flavio-sipoli) 
- [Flúvio Lima](https://github.com/Lyebert) 
- [Jonatas Bento](https://github.com/jonatas-bento) 
- [Lila An](https://github.com/lilex82) 
- [Lourene Schueler](https://github.com/Lourene-MCSchueler)

## Captura da página inicial

![Alt text](https://github.com/jonatas-bento/MOOVEBIKE/blob/main/screenshot/moovebike.png)


