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

  /**
   * Event emitter which push of input to parent component.
   */
  @Output()
  inputEmitter = new EventEmitter<string>();

  /**
   * Event emitter which push value of isDisplayed property to parent component.
   */
  @Output()
  isDisplayed = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * Emit value.
   *
   * @param value boolean value
   */
  emitDisplayCondition(value: boolean): void {
    this.isDisplayed.emit(value);
  }

  /**
   * Emit value of input.
   *
   * @param value input value
   */
  emitInputValue(value: string): void {
    this.inputEmitter.emit(value);
  }

}
