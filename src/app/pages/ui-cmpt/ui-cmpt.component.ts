import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from '@shared/shared.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-ui-cmpt',
  templateUrl: './ui-cmpt.component.html',
  styleUrls: ['./ui-cmpt.component.scss']
})
export class UiCmptComponent implements AfterViewInit{
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('tableSearch') tableSearch: ElementRef;

  transPage = "pages.uiCmpt."
  displayedColumns: string[] = ['check', 'name', 'status', 'dateline'];
  uiCmptSource = new MatTableDataSource<any>();
  pageSizeOptions: number[];
col: any;

  constructor(
    private _sharedService: SharedService,
  ) {
    this.pageSizeOptions = this._sharedService.pageSizeOption;
  }

  ngAfterViewInit(): void {
    this.uiCmptSource.sort = this.sort;
    this.uiCmptSource.data = [
      {index: 1, name: 'Read', status: 'done', dateline: '2023/9/27'},
      {index: 1, name: 'Read', status: 'done', dateline: '2023/9/27'},
      {index: 2, name: 'Drink 7', status: 'done', dateline: '2023/10/31'},
      {index: 3, name: 'Coding', status: 'done', dateline: '2023/9/27'},
    ];
  }

}
