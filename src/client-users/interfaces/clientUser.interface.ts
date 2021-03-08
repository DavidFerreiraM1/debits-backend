import { IAddress } from './address.interface';
import { ICompany } from './company.interface';

export interface IClientUser {
  id?: number;
  name: string;
  email: string;
  phone: string;
  webSite: string;
  address: IAddress;
  company: ICompany;
}
