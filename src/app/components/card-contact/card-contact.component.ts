import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IContact } from '../../interfaces/icontact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.css']
})

export class CardContactComponent implements OnInit {
  @Input() contact: IContact;


  constructor(private _contactService: ContactService) { }

  ngOnInit() {
  }

  searchContact(id: number) {
    this._contactService.setIdSeach(id);
  }

}
