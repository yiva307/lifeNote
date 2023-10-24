import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Life Note';
  isNavOpened: boolean = false;
  isHomePage = true;
  menuData = [
    {
      id: '1',
      key: 'dashboard',
      href: '/dashboard',
      matIcon: 'home',
      isTopLevel: true
    },
    {
      id: '2',
      key: 'spending',
      href: '/spending',
      matIcon: 'cake',
      isTopLevel: true
    },
    {
      id: '3',
      key: 'note',
      href: '/note',
      matIcon: 'note',
      isTopLevel: true
    },
    {
      id: '4',
      key: 'tracking',
      href: '/tracking',
      matIcon: 'apple',
      isTopLevel: true
    },
  ]

  toggleMenu(): void {
    this.isNavOpened = !this.isNavOpened;
  }
}
