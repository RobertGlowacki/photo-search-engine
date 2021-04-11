import { Component, Input, OnInit } from '@angular/core';
import { SearchEngineService } from '../service/search-engine.service';
import { GetSingleResult } from '../model/get-single-result';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ResultDetailsComponent } from '../result-details/result-details.component';

/**
 * Component displaying set of results.
 */
@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  /**
   * Input field value.
   */
  @Input()
  inputValue: string;

  /**
   * Data fetched form Unsplash API.
   */
  results: GetSingleResult[];

  /**
   * @param searchEngineService service providing data from API
   * @param matDialog Mat Dialog pop up
   */
  constructor(private searchEngineService: SearchEngineService, private matDialog: MatDialog) {
  }

  /**
   * On init data is fetch from Unsplash API.
   */
  ngOnInit(): void {
    this.searchEngineService.getResponse(this.inputValue).subscribe(response => console.log(response.body));

    this.searchEngineService.getResponse(this.inputValue).subscribe(response => this.results = response.body.results);
  }

  /**
   * Open dialog with single result data.
   *
   * @param data data
   */
  showDetails(data: GetSingleResult): void {
    this.matDialog.open(ResultDetailsComponent, this.dialogConfig(data, ['dialog']));
  }

  /**
   * Method sets parameters of dialog pop up.
   *
   * @param data - depends on call method may be survey or measurements list
   * @param panelClass - css class
   */
  private dialogConfig(data, panelClass): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    dialogConfig.panelClass = panelClass;
    return dialogConfig;
  }

}
