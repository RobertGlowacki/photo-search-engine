import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetSingleResult } from '../model/get-single-result';

/**
 * Component displaying single result.
 */
@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent implements OnInit {

  /**
   * @param _input injected input
   */
  constructor(@Inject(MAT_DIALOG_DATA) private _input: GetSingleResult) {
  }

  ngOnInit(): void {
  }

  get input(): GetSingleResult {
    return this._input;
  }

}
