# Inventory-App

Foram usadas as seguintes tecnologias:

- React com typescript
- Heroku para deployment
- Todos os dados ficam armazenados no localstorage

## Funcionalidades Disponiveis

Neste projeto vc pode:

### HomePage

#### `barra de navegacao`

navegar entra as paginas disponives

#### `rodape`

navegar entra as paginas disponives

#### `filtro itens do inventario segundo categoria`

vc pode selecionar as categorias desejada no input dropbox

#### `disponibilidade do itens no inventario`

caso a quantidade em estoque for 0, o produto nao eh mostrado

#### `card de produto`

cliando na imagem eh possivel ver a descricao do produto
botao para adicionar ao carrinho

### CartPopUp

visualizacao de todos os itens no carrinho
possibilidade de excluir itens do carrihno

### ClientPage

Cadastro completo de um novo cliente com autocomplete configurado
Vizualizacao dos clientes cadastrados em uma div contraivel

### FakeDataBank

Disponivel no localStorage, inicial por arquivo JSON

#### clients

variable clients: Array<Clients>
<code>
class Clients: {
id: string;
full_name: string;
email: string;
phone_number: string;
date_of_birth: Date;
addresses: Array<Address>;
}
</code>

class Address: {
address_line_1: string; <!-- Endereco: rua e numero -->
address_line_2: string; <!-- Complemento -->
admin_area_1: string; <!-- Estado -->
admin_area_2: string; <!-- Cidade -->
postal_code: string; <!-- CEP -->
country_code: string; <!-- codigo 2 letras ISO 3166-1 que identifica o pais -->
}

#### products

variable products: Array<Item>

class Item {
id: string;
name: string;
unit_amount: Money;
description: string;
img: string;
category: string;
quantity: number = 0;
}

#### cart

variable carr: Array<Item>
