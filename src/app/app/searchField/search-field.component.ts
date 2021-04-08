import { Component, OnInit } from '@angular/core';
import { SearchEngineService } from '../service/search-engine.service';

/**
 * Component containing search field.
 */
@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  /**
   * @param searchEngineService service providing search engine
   */
  constructor(private searchEngineService: SearchEngineService) {
  }

  ngOnInit(): void {
  }

  /**
   * On enter service is callled for get data.
   */
  onEnter(input: string): void {
    this.searchEngineService.getPhotos(input);
  }

}
