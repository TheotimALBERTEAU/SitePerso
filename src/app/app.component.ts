import {Component, computed, HostListener, signal} from '@angular/core';
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

  isMobile = signal(window.innerWidth <= 740);

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile.set(window.innerWidth <= 740);
  }

  title = 'SitePerso';

  isMenuOpen = signal(false);
  menuIcon = computed(() => this.isMenuOpen() ? '✕' : '☰');

  toggleMenu() {
    this.isMenuOpen.update(current => !current);
  }

  shouldShowMenu() {
    // On affiche si : ce n'est pas un mobile OU si le menu est ouvert
    return !this.isMobile() || this.isMenuOpen();
  }

  onClickCV() {
    window.open('Assets/CV/cv.pdf')
  }

  onClickHome() {
    this.router.navigate(['/TheotimAlberteau'])
  }
}
