import { Component, OnInit } from '@angular/core';
import { SearchEngineService } from '../service/search-engine.service';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  constructor(private searchEngineService: SearchEngineService) {
  }

  ngOnInit(): void {

  }

}
