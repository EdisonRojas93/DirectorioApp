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

  private showform = new BehaviorSubject<boolean>(false);
  showContent = this.showform.asObservable();

  private data = new BehaviorSubject<IContact[]>([]);
  lstContact = this.data.asObservable();

  constructor(private _http: HttpClient) {
    this.getContacts();
  }

  setIdSeach(id: number) {
    this.contact.next(id);
  }

  showAddContact() {
    this.showform.next(true);
  }

  getContacts() {
    this._http.get<IContact[]>(this.url).subscribe(res => {
      this.data.next(res);
      this.showform.next(false);
    });
  }

  getContact(id: number): Observable<IContact> {
    return this._http.get<IContact>(`${this.url}/${id}`);
  }
  getPost(contact: IContact) {
    const result = this._http.post<IContact>(this.url, contact);

    this.getContacts();

    return result;
  }

  putContact(contact: IContact) {
    const result = this._http.put(`${this.url}/${contact.id}`, contact);
    this.getContacts();
    return result;
  }

  deleteContact(id: number) {
    const result = this._http.delete(`${this.url}/${id}`);

    this.getContacts();


    return result;
  }
}
