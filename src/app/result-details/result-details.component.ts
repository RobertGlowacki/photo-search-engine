import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetResultResponse } from '../model/get-result-response';

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
  constructor(@Inject(MAT_DIALOG_DATA) private _input: GetResultResponse) {
  }

  ngOnInit(): void {
  }

  get input(): GetResultResponse {
    return this._input;
  }

}
