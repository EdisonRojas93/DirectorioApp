import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { IContact } from './../../interfaces/icontact';

@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.component.html',
  styleUrls: ['./details-contact.component.css']
})
export class DetailsContactComponent implements OnInit {

  contact: IContact;
  constructor(private _contactService: ContactService) {
  }

  ngOnInit() {
    this._contactService.id.subscribe(resp => {
      this._contactService.getContact(resp).subscribe(contact => this.contact = contact);
    });
  }

}
