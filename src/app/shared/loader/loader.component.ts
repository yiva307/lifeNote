import { Component } from '@angular/core';

import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading: boolean | undefined;

  constructor(public loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe(v => {
      this.isLoading = v;
    });
  }
}
