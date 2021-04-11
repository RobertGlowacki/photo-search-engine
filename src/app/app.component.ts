import { Component } from '@angular/core';
import { GetSearchResultsResponse } from './model/get-search-results-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Condition whether component are displayed.
   */
  isDisplayed = true;

  results: string;

  /**
   * Method changes state of isDisplayed property.
   *
   * @param value boolean value from child component.
   */
  changeDisplayCondition(value: boolean): void {
    this.isDisplayed = value;
  }

  emitInputValue(value: string): void {
    this.results = value;
  }

}
