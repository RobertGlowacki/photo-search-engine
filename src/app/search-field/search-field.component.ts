import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchEngineService } from '../service/search-engine.service';
import { GetSearchResultsResponse } from '../model/get-search-results-response';

/**
 * Component displaying search field.
 */
@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  /**
   * Event emitter which push of results to parent component.
   */
  @Output()
  resultsEmitter = new EventEmitter<GetSearchResultsResponse>();

  /**
   * Result fetch form API.
   */
  results: GetSearchResultsResponse;

  /**
   * Event emitter which push value of isDisplayed property to parent component.
   */
  @Output()
  isDisplayed = new EventEmitter<boolean>();

  /**
   * @param searchEngineService service providing search engine.
   */
  constructor(private searchEngineService: SearchEngineService) {
  }

  ngOnInit(): void {
  }

  /**
   * On key enter service is called for data and emit values of properties.
   */
  onKeyEnter(input: string): void {
    this.searchEngineService.getResponse(input).subscribe(response => {
      this.results = response.body;
      this.resultsEmitter.emit(this.results);
    });
    this.isDisplayed.emit(false);
  }

}
