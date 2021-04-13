import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchEngineService } from '../service/search-engine.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

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
  autocompleteOptions: string[] = [];

  /**
   * Fontawesome icon.
   */
  faSearch = faSearch;

  /**
   * Input value.
   */
  @Input()
  inputValue: string;

  /**
   * @param searchEngineService service providing fetched data
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
   * Condition not to count delete and backspace as input length.
   *
   * @param input input typed by user
   * @param keywordNumber keyword number
   */
  getKeywords(input: string, keywordNumber: number): void {
    let length = input.length;
    if (keywordNumber === 8 || keywordNumber === 46) {
      length -= 1;
    }
    if (length >= 2) {
      this.searchEngineService.getAutocompleteKeywords(input).subscribe(response =>
        response.body.autocomplete.map(result => this.autocompleteOptions.push(result.query)));
    }
    this.autocompleteOptions = [];
  }

  /**
   *
   * @param $event event object from template
   */
  onSelectionChange($event: any): void {
    this.onKeyEnter($event.source.value);
  }

}
