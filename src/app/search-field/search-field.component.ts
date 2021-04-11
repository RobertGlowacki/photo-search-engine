import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

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
  hostRacers = ['one', 'twotwo', 'thrrrreeee'];

  hostsRacers = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term =>
        term === '' ? [] : this.hostRacers
          .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
          .slice(0, 10)
      )
    )

  constructor() {
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

}
