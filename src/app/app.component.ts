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

  results: GetSearchResultsResponse[];

  /**
   * Method changes state of isDisplayed property.
   *
   * @param value boolean value from child component.
   */
  changeDisplayCondition(value: boolean): void {
    this.isDisplayed = value;
  }

  another(value: GetSearchResultsResponse[]): void {
    this.results = value;
  }

}
