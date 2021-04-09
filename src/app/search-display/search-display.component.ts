import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/**
 * Component displaying initial search area.
 */
@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {

  @Output()
  isDisplayed = new EventEmitter<boolean>();

  someValue: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  change(value: boolean): void {
    this.someValue = value;
    this.isDisplayed.emit(this.someValue);
  }

}
