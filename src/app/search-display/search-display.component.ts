import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetSearchResultsResponse } from '../model/get-search-results-response';

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
  resultEmitter = new EventEmitter<GetSearchResultsResponse[]>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitDisplayCondition(value: boolean): void {
    this.isDisplayed.emit(value);
  }

  emitResults(value: GetSearchResultsResponse[]): void {
    this.resultEmitter.emit(value);
  }

}
