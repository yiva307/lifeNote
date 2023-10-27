import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { SharedService } from '@shared/shared.service';
import { TableInfo } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit{
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('tableSearch') tableSearch: ElementRef;

  transPage = "pages.uiCmpt.table."
  displayedColumns: string[] = ['check', 'name', 'status', 'dateline', 'description'];
  tableSource = new MatTableDataSource<TableInfo>();
  selection = new SelectionModel<TableInfo>(true, []);

  pageSizeOptions: number[];
  maxRow: number = 60;
  tableData = [
    { name: 'Eat Fruit', status: 'not start', dateline: '2023.9.29', description: ''},
    { name: 'Read', status: 'done', dateline: '2023.9.25', description: ''},
    { name: 'Drink', status: 'done', dateline: '2023.10.31', description: ''},
    { name: 'Coding', status: 'done', dateline: '2023.9.27', description: ''},
  ]

  constructor(
    private _sharedService: SharedService,
  ) {
    this.pageSizeOptions = this._sharedService.pageSizeOption;
  }

  ngOnInit(): void {
    // this.tableSource.data = this.tableData;
    // this.getTableData()
    console.log('starttttt')
  }

  ngAfterViewInit(): void {
    this.tableSource.sort = this.sort;
    this.tableSource.data = this.tableData;
    this.tableSource.paginator = this.paginator;
  }

  getTableData(): void{
    // TODO:   get api
    this.tableSource.data = this.tableData;
  }

  createTableData(): void{
    // open create dialog
  }

  deleteTableData(): void{
    // open delete dialog
  }

  /* * * * *  Checkbox Behavior * * * * */
  isAllSelected(): boolean {
    let numSelected = 0;
    this.tableSource.connect().value.forEach(data => {
      if (this.selection.isSelected(data)) {
        numSelected += 1;
      }
    });
    const numRows = this.tableSource.connect().value.length;
    return numSelected === numRows && numRows > 0;
  }

  isSelectIndeterminate(): boolean {
    return this.tableSource.connect().value.some(data => {
      return this.selection.isSelected(data) && !this.isAllSelected();
    });
  }

  toggleSelectAll(): void {
    if (this.isAllSelected()) {
      this.selection.clear(); // 取消全選
    } else {
      this.selection.select(...this.tableSource.data); // 全選
    }
  }

}
