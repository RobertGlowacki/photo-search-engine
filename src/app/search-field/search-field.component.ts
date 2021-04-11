import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchEngineService } from '../service/search-engine.service';
import { FormControl } from '@angular/forms';

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
   * Event emitter which push of input to parent component.
   */
  @Output()
  inputEmitter = new EventEmitter<string>();

  /**
   * Event emitter which push value of isDisplayed property to parent component.
   */
  @Output()
  isDisplayed = new EventEmitter<boolean>();

  /**
   * List of autocomplete options.
   */
  autocomplete: string[] = [];

  formControl = new FormControl();

  /**
   * @param searchEngineService service providing
   */
  constructor(private searchEngineService: SearchEngineService) {
  }

  ngOnInit(): void {
  }

  /**
   * On key enter emit values of properties.
   */
  onKeyEnter(input: string): void {
    this.isDisplayed.emit(false);
    this.inputEmitter.emit(input);
  }

  /**
   * Get list of auto-complete keyword suggestions.
   *
   * @param input input typed by user
   */
  getKeywords(input: string): void {
    console.log(input.length);
    if (input.length >= 3) {
      this.searchEngineService.getAutocompleteKeywords(input).subscribe(response =>
        response.body.autocomplete.map(result => this.autocomplete.push(result.query)));
      this.autocomplete = [];
    }
  }

}
