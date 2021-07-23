import { AddressToShip } from 'data/Classes/Address';

const {
  purchase_units: [
    {
      amount: {
        //https://developer.paypal.com/docs/api/reference/currency-codes/
        currency_code = 'BRL',
        breakdown: {
          item_total: { value: item_total_value = '0.00' } = {},
          shipping: { value: shipping_value = '0.00' } = {},
          handling: { value: handling_value = '0.00' } = {},
          shipping_discount: { value: shipping_discount_value = '0.00' } = {},
          discount: { value: discount_value = '0.00' } = {},
        } = {},
      } = {},
      description = '',
      itens = [],
      shipping: {
        name: { full_name = '' } = {},
        type = null, // 'SHIPPING' OR 'PICKUP_IN_PERSON'
        address: {
          address_line_1 = '', // String number and street
          address_line_2 = '', // Suite or apartament
          admin_area_1 = '', // province or state (UK= A county.)
          admin_area_2 = '', // city, town or village
          postal_code = '', // https://en.wikipedia.org/wiki/Postal_code#United_Kingdom
          country_code = '', //The two-character ISO 3166-1 code that identifies the country or region.
        } = {},
      } = {},
    } = {},
  ] = [],
  status = null, // CREATED, SAVED, APPROVED, VOIDED, COMPLETED, PAYER_ACTION_REQUIRED
  update_time = null,
} = {};

export class Order {
  private create_time: Date;
  private loggedUserId: string;
  private purchase_units: Array<PurchaseUnit>;
  private status: StatusEnum;
  private update_time: Date;

  constructor(
    userId: string,
    create_time?: string,
    purchase_units?: string,
    status?: string,
    update_time?: string
  ) {
    this.loggedUserId = userId;
    const dateNow = new Date(Date.now());
    this.create_time = create_time ? new Date(create_time) : dateNow;
    this.purchase_units = [new PurchaseUnit()];
    this.status = StatusEnum.CREATED;
    this.update_time = update_time ? new Date(update_time) : dateNow;
    purchase_units && console.log(JSON.parse(purchase_units));
  }
  addItem(item: Item, purchase_unit_index: number = 0) {
    this.purchase_units[purchase_unit_index].addItem(item);
    this.update_time = new Date(Date.now());
  }
  setId(id: string) {
    this.loggedUserId = id;
  }
  changeItemQuantity(
    quantity: number,
    item_index: number,
    purchase_unit_index: number = 0
  ) {
    this.purchase_units[purchase_unit_index].itens[
      item_index
    ].quantity = quantity;
  }
  setStatus(status: StatusEnum) {
    this.status = status;
    this.update_time = new Date(Date.now());
  }
  getOrder(): {
    loggedUserId: string;
    create_time?: string;
    purchase_units?: string;
    status?: string;
    update_time?: string;
  } {
    const {
      loggedUserId,
      create_time,
      purchase_units,
      status,
      update_time,
    } = this;
    return {
      loggedUserId,
      create_time: create_time.toDateString(),
      purchase_units: JSON.stringify(purchase_units),
      status,
      update_time: update_time.toDateString(),
    };
  }
}
enum StatusEnum {
  CREATED = 'CREATED',
  SAVED = 'SAVED',
  APPROVED = 'APPROVED',
  VOIDED = 'VOIDED',
  COMPLETED = 'COMPLETED',
  PAYER_ACTION_REQUIRED = 'PAYER_ACTION_REQUIRED',
}

export class PurchaseUnit {
  amount: ItemAmount;
  description: string;
  itens: Array<Item>;
  shipping: AddressToShip;
  constructor() {
    this.amount = new ItemAmount({
      item_total_value: 0,
      shipping_value: 0,
      handling_value: 0,
      shipping_discount_value: 0,
      discount_value: 0,
    });
    this.description = '';
    this.itens = [];
    this.shipping = new AddressToShip();
  }
  addItem(item: Item): void {
    this.itens.push(item);
  }
}

export class Money {
  constructor(private value: Number, private currency_code: string = 'BRL') {}
  setValue(value: Number) {
    this.value = value;
  }
  getValue() {
    return `R$ ${this.value}`;
  }
}
export class ItemAmount extends Money {
  breakdown: {
    item_total: Money;
    shipping: Money;
    handling: Money;
    shipping_discount: Money;
    discount: Money;
  };
  constructor({
    item_total_value,
    shipping_value,
    handling_value,
    shipping_discount_value,
    discount_value,
  }: {
    item_total_value: number;
    shipping_value: number;
    handling_value: number;
    shipping_discount_value: number;
    discount_value: number;
  }) {
    const breakdown = {
      item_total: new Money(item_total_value),
      shipping: new Money(shipping_value),
      handling: new Money(handling_value),
      shipping_discount: new Money(shipping_discount_value),
      discount: new Money(discount_value),
    };
    const amountValue =
      item_total_value +
      shipping_value +
      handling_value -
      shipping_discount_value -
      discount_value;
    super(amountValue);
    this.breakdown = breakdown;
  }
}

export class Item {
  id: string;
  name: string;
  unit_amount: Money;
  description: string;
  img: string;
  category: string;
  quantity: number = 0;
  constructor({
    id,
    name,
    unit_amount,
    description,
    quantity,
    img,
    category,
  }: {
    id: string;
    name: string;
    unit_amount: Money;
    description: string;
    img: string;
    category: string;
    quantity: number;
  }) {
    this.id = id;
    this.name = name;
    this.unit_amount = unit_amount;
    this.description = description;
    this.img = img;
    this.category = category;
    this.quantity = quantity;
  }
}
