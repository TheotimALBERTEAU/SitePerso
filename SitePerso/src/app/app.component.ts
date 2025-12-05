import {Component, computed, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {
  }

  title = 'SitePerso';

  isMenuOpen = signal(false);
  menuIcon = computed(() => this.isMenuOpen() ? '✕' : '☰');

  toggleMenu() {
    this.isMenuOpen.update(current => !current);
  }

  onClickCV() {
    window.open('/SitePerso/Assets/CV/cv.pdf')
  }

  onClickContact() {
    this.router.navigate(['/Contact'])
  }

  onClickHome() {
    this.router.navigate(['/TheotimAlberteau'])
  }
}
