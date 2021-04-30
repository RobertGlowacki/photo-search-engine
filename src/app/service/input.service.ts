import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Service which emits input value to all subscribers.
 */
@Injectable({
  providedIn: 'root'
})
export class InputService {

  /**
   * Input value with empty string as initial value.
   */
  private _input: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
  }

  get input(): BehaviorSubject<string> {
    return this._input;
  }

}
