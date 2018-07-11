import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../interfaces/icontact';
import { Observable, BehaviorSubject } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = `http://localhost:4200/users`;

  private contacts = new BehaviorSubject<IContact>({});

  private contact = new BehaviorSubject<number>(0);
  id = this.contact.asObservable();

  constructor(private _http: HttpClient) {

  }

  setIdSeach(id: number) {
    this.contact.next(id);
  }
  getContacts(): Observable<IContact[]> {
    return this._http.get<IContact[]>(this.url);
  }

  getContact(id: number): Observable<IContact> {
    return this._http.get<IContact>(`${this.url}/${id}`);
  }

  putContact(contact: IContact) {
    return this._http.put(`${this.url}/${contact.id}`, contact);
  }

  deleteContact(id: number) {
    return this._http.delete(`${this.url}/${id}`);
  }
}
