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

  @Output()
  inputEmitter = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitDisplayCondition(value: boolean): void {
    this.isDisplayed.emit(value);
  }

  emitInputValue(value: string): void {
    this.inputEmitter.emit(value);
  }

}
