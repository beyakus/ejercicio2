import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NofoundComponent } from './components/nofound/nofound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NofoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'', component:HomeComponent },
      { path:'about', component: AboutComponent },
      { path:'contact', component: ContactComponent },
      { path:'**', component:NofoundComponent } 
    ],{ useHash:true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
