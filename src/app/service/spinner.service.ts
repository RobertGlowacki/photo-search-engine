import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  /**
   * Array of promises.
   */
  observables: Array<Promise<any>> = [];

  /**
   * @param spinner - wrapped NgxSpinnerService
   */
  constructor(private spinner: NgxSpinnerService) {
  }

  /**
   * Method for adding new promise to be watched.
   *
   * @param value promise to be watched
   */
  public addPromise(value: Promise<any>): void {
    this.observables.push(value);
    // Promise returns true when spinner is loaded. We don't need to do anything with it.
    this.spinner.show().then(r => null);
    value.finally(() => {
      const index = this.observables.indexOf(value, 0);
      if (index > -1) {
        this.observables.splice(index, 1);
      } else {
        console.error('promise removal unsuccessful');
      }
      if (this.observables.length === 0) {
        this.spinner.hide();
      }
    });
  }

}
