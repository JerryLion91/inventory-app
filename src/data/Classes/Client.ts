import { Address } from './Address';

export class Client {
  constructor(
    public id: string = '',
    public full_name: string = '',
    public email: string = '',
    public phone_number: string = '',
    public date_of_birth: Date | null = null,
    public addresses: Array<Address> = [new Address()]
  ) {}
}
