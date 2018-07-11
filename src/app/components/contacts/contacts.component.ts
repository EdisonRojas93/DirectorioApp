import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Observable } from '../../../../node_modules/rxjs';
import { IContact } from '../../interfaces/icontact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: IContact[];

  constructor(private _contactService: ContactService) {
  }

  ngOnInit() {
    this._contactService.lstContact.subscribe(resp => this.contacts = resp);
  }

  addContact() {
    this._contactService.setIdSeach(-1);
    this._contactService.showAddContact();
  }

}
