export class Address {
  constructor(
    public address_line_1: string = '', // String number and street
    public address_line_2: string = '', // Suite or apartament
    public admin_area_1: string = '', // province or state (UK= A county.)
    public admin_area_2: string = '', // city, town or village
    public postal_code: string = '', // https://en.wikipedia.org/wiki/Postal_code#United_Kingdom
    public country_code: string = '' //The two-character ISO 3166-1 code that identifies the country or region.
  ) {}
}

export class AddressToShip {
  constructor(
    private full_name: string = '',
    private type: ShippingTypeEnum = ShippingTypeEnum.SHIPPING,
    private address: Address = new Address()
  ) {}
  setFullName(full_name: string) {
    this.full_name = full_name;
  }
  setType(type: ShippingTypeEnum) {
    this.type = type;
  }
  setAddress(address: Address) {
    this.address = address;
  }
  getFullAddress() {
    return this;
  }
}
export enum ShippingTypeEnum {
  SHIPPING = 'SHIPPING',
  PICKUP_IN_PERSON = 'PICKUP_IN_PERSON',
}
