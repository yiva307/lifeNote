import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoaderService } from '@shared/loader/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [LoaderService],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DashboardComponent implements OnInit {
  currentDate = new Date();

  constructor(
    private _loaderService: LoaderService,
  ) {}

  ngOnInit(): void {
    this._loaderService.show();
  }
}
