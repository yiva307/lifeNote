import { Component } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  currentDate = new Date();
}
