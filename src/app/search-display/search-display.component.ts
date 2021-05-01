import { Component, OnInit } from '@angular/core';

/**
 * Main component of application.
 */
@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {

  /**
   * Value describing whether results view is displayed.
   */
  isViewChanged = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  emitDisplayCondition(value: boolean): void {
    this.isViewChanged = value;
  }

}
