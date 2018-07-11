import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { IContact } from './../../interfaces/icontact';


@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.component.html',
  styleUrls: ['./details-contact.component.css']
})
export class DetailsContactComponent implements OnInit {

  contact: IContact = {
    name: '',
    username: '',
    address: '',
    company: {
      name: '',
      address: '',

    },
    email: '',
    happybirthday: '',
    phone: '',
    website: ''
  };
  showInfo: boolean;
  constructor(private _contactService: ContactService) {

  }

  ngOnInit() {
    this._contactService.showContent.subscribe(resp => this.showInfo = resp);


    this._contactService.id.subscribe(resp => {
      this._contactService.getContact(resp).subscribe(contact => {
        console.log('hola');
        console.log(contact);

        this.contact = contact;
        this.showInfo = true;
      });
    });
  }

  saveContact() {
    if (this.contact.id != undefined) {
      this._contactService.putContact(this.contact).subscribe(resp => {
        alert('se guarda correctamente el contacto');
      });
    } else {
      this.createContact();
    }
  }

  deleteContact() {
    this._contactService.deleteContact(this.contact.id).subscribe(res => {
      alert('Contacto eliminado exitosamente');
    });
  }

  createContact() {
    this._contactService.getPost(this.contact).subscribe(res => {
      alert('Se creo el contacto exitosamente');
      this.contact.id = res.id;
    });
  }

}
