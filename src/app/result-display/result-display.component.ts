import { Component, Input, OnInit } from '@angular/core';
import { SearchEngineService } from '../service/search-engine.service';
import { GetSingleResult } from '../model/get-single-result';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  @Input()
  inputValue: string;

  results: GetSingleResult[];

  constructor(private searchEngineService: SearchEngineService) {
  }

  ngOnInit(): void {
    this.searchEngineService.getResponse(this.inputValue).subscribe(response => this.results = response.body.results);
  }

}
