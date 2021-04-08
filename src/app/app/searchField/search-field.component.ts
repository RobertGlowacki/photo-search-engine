import { Component, OnInit } from '@angular/core';
import { SearchEngineService } from '../service/search-engine.service';
import { GetSearchResults } from '../model/get-search-results';

/**
 * Component containing search field.
 */
@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  results: GetSearchResults;

  /**
   * @param searchEngineService service providing search engine
   */
  constructor(private searchEngineService: SearchEngineService) {
  }

  ngOnInit(): void {
  }

  /**
   * On key enter service is called for get data.
   */
  onEnter(input: string): void {
    this.searchEngineService.getPhotos(input).subscribe(response => {
        this.results = response.body;
        console.log(this.results.results);
      }
    );
  }

}
