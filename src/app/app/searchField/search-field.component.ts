import { Component, OnInit } from '@angular/core';
import { SearchEngineService } from '../search-engine.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  constructor(private searchEngineService: SearchEngineService) { }

  ngOnInit(): void {
  }

  onEnter(): void {
   this.searchEngineService.getPhotos('polska');
  }

}
