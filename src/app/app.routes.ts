import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {ContactComponent} from './pages/contact/contact.component';

export const routes: Routes = [
  { path : "TheotimAlberteau", component : MainPageComponent },
  { path : "", component : MainPageComponent },
  { path : "Contact", component : ContactComponent },
];
