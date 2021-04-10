import { Component, Input, OnInit } from '@angular/core';
import { GetSearchResultsResponse } from '../model/get-search-results-response';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  @Input()
  results: GetSearchResultsResponse;

  constructor() {
  }

  ngOnInit(): void {
  }

}
