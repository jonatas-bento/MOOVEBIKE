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
- Se houver atraso na devolução, a multa deverá ser paga no momento da entrega da bicicleta.

### Fluxo do usuário

- Cadastro no site
- Escolha e compra do plano
- Retirada da bicicleta na loja física
- Informações sobre o plano adquirido disponíveis na página "Reservas".

### Fluxo da loja física

- Ativar o plano na entrega da bicicleta.
- Desativar o plano no recebimento da bicicleta e cobrança de multa, se houver.

## Tecnologias

- [Express](https://expressjs.com/pt-br/)
- [Ejs](https://ejs.co/)
- HTML5
- CSS3
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
$ npx sequelize-cli db:migrate:all
```

Cadastrar previamente os dados dos administradores no arquivo ('src', 'database', 'seeders', '20210705135420-demo-admins').
A senha deve estar criptografada. Ver arquivo ('src', 'libs', 'crypto').

Popular o banco de dados:

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

## Membros

-[Anne Bortoli de Oliveira](https://github.com/ANNEBORTOLI) -[Flávio Magalhaes Sipoli](https://github.com/flavio-sipoli) -[Flúvio Lima](https://github.com/Gh0ulbrz) -[Jonatas Bento](https://github.com/jonatas-bento) -[Lila An](https://github.com/lilex82) -[Lourene de Melo Camargo de Schueler](https://github.com/Lourene-MCSchueler)
