import { Component, ChangeDetectionStrategy } from '@angular/core';
import { menuData } from './menu.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagesComponent {
  menuNodes = menuData;
  title = "Life Note";
  isNavOpened: boolean;

  toggleMenu(): void {
    this.isNavOpened = !this.isNavOpened;
  }
}
