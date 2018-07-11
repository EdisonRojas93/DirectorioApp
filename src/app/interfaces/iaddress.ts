import { IGeocalitation } from "./igeocalitation";


export interface IAddress {
  street:string,
  suite:string,
  city:string,
  zipcode:string,
  geo: IGeocalitation
}
