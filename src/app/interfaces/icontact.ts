import { ICompany } from "./icompany";

export interface IContact {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
  happybirthday?: string;
  company?: ICompany;
}
