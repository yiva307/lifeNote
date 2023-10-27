import { Injectable } from '@angular/core';

import { DefaultOptionModel } from '../shared/shared.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _pageSizeOption = [10, 20, 50];
  private _noData = '---';
  private _debounceTime = 300;

  constructor() {}

  get pageSizeOption(): number[] {
    return this._pageSizeOption;
  }

  get noData(): string {
    return this._noData;
  }

  get debounceTime(): number {
    return this._debounceTime;
  }

  /**
   * Empty Selection Option
   * @returns {string}
   */
  get defaultOption(): DefaultOptionModel {
    return {
      text: '--',
      value: -1
    };
  }
}
