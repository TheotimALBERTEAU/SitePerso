import {Component, computed, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SitePerso';

  isMenuOpen = signal(false);
  menuIcon = computed(() => this.isMenuOpen() ? '✕' : '☰');

  toggleMenu() {
    this.isMenuOpen.update(current => !current);
  }

  onClickCV() {
    window.open('cv.pdf', '_self')
  }
}
