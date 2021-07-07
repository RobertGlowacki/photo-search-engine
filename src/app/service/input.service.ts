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
  input: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
  }

  changeInputValue(value: string): void {
    this.input.next(value);
  }

}
