import { Component } from '@angular/core';

/**
 * Aggregation component of application..
 */
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

  /**
   * Input value typed by user.
   */
  input: string;

  /**
   * Method changes state of isDisplayed property.
   *
   * @param value boolean value from child component.
   */
  changeDisplayCondition(value: boolean): void {
    this.isDisplayed = value;
  }

  /**
   * Method pass value of input to child component.
   *
   * @param value value typed by user
   */
  emitInputValue(value: string): void {
    this.input = value;
  }

}
