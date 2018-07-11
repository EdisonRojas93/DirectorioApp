import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CardContactComponent } from './components/card-contact/card-contact.component';
import { DetailsContactComponent } from './components/details-contact/details-contact.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactsComponent } from './components/contacts/contacts.component';

// services
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardContactComponent,
    DetailsContactComponent,
    FooterComponent,
    ContactsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
