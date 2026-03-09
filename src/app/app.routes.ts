import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {LegalNoticesComponent} from './pages/legal-notices/legal-notices.component';

export const routes: Routes = [
  { path : "TheotimAlberteau", component : MainPageComponent },
  { path : "", component : MainPageComponent },
  { path : "LegalNotices", component : LegalNoticesComponent },
];
