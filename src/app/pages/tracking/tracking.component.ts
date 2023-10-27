import { Component, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements AfterViewInit{
  transPage = 'pages.tracking.';
  displayedColumns: string[] = ['checkbox', 'todo', 'status', 'dateline'];
  toDoListSource = new MatTableDataSource<any>();

  ngAfterViewInit(): void {
    this.toDoListSource.data = [
      {index: 1, todo: 'Read', status: 'done', dateline: '2023/9/27'},
      {index: 2, todo: 'Drink 7', status: 'done', dateline: '2023/10/31'},
      {index: 3, todo: 'Coding', status: 'done', dateline: '2023/9/27'},
    ];
  }
}
