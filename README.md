# Inventory-App

Foram usadas as seguintes tecnologias:

- React com typescript
- Firebase para deployment
- Todos os dados ficam armazenados no localstorage

https://inventory-app0.web.app

## Funcionalidades Disponiveis

Neste projeto vc pode:

### `HomePage`

- navegar entre as paginas disponives na barra de navegacao

- filtrar os itens do inventarios por selecionar as categorias desejada no input dropbox

- caso a quantidade em estoque for 0, o produto nao eh mostrado

- ver a descricao do produto clicando na imagem de cada produto

- adicionar um produto ao carrinho

### `CartPopUp`

- visualizar todos os itens no carrinho
- excluir itens do carrihno

### `ClientPage`

- Cadastro completo de um novo cliente com autocomplete configurado
- Vizualizacao dos clientes cadastrados em uma div retratil

### `FakeDataBank`

Disponivel no localStorage, inicial por arquivo JSON

### variable clients: Array\<Clients\>

```js script
class Clients: {
    id: string;
    full_name: string;
    email: string;
    phone_number: string;
    date_of_birth: Date;
    addresses: Array<Address>;
}
```

```js script
class Address: {
  address_line_1: string; // Endereco: rua e numero
  address_line_2: string; // Complemento
  admin_area_1: string; // Estado
  admin_area_2: string; // Cidade
  postal_code: string; // CEP
  country_code: string; // codigo 2 letras ISO 3166-1 que identifica o pais
}
```

### variable products: Array\<Item\>

```js script
class Item {
  id: string;
  name: string;
  unit_amount: Money;
  description: string;
  img: string;
  category: string;
  quantity: number = 0;
}
```

### variable cart: Array\<Item\>
