import { Component, HostListener, OnInit } from '@angular/core';
import { SearchEngineService } from '../service/search-engine.service';
import { GetResultResponse } from '../model/get-result-response';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ResultDetailsComponent } from '../result-details/result-details.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetPhotosResponse } from '../model/get-photos-response';
import { InputService } from '../service/input.service';

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
  inputValue: string;

  /**
   * Data fetched form Unsplash API.
   */
  results: GetPhotosResponse = {
    results: [],
    total: 0,
    total_pages: 0
  };

  /**
   * Page number which is fetched form API. Initial value is 1.
   */
  pageNumber = 1;

  /**
   * @param inputService service providing value of input field
   * @param searchEngineService service providing data from API
   * @param matDialog Mat Dialog pop up
   * @param spinner spinner service
   */
  constructor(private inputService: InputService, private searchEngineService: SearchEngineService,
              private matDialog: MatDialog, private spinner: NgxSpinnerService) {
  }

  /**
   * Method fetchData is call.
   */
  ngOnInit(): void {
    this.inputService.input.subscribe(value => this.inputValue = value);
    this.fetchData(this.pageNumber);
  }

  /**
   * Data are fetched from Unsplash API. During process of fetching data spinner is show.
   *
   * @param pageNumber page number send it request
   */
  private fetchData(pageNumber: number): void {
    this.spinner.show();
    this.searchEngineService.getResponse(this.inputValue, pageNumber).subscribe(response => {
      this.results.results.push(...response.body.results);
      this.spinner.hide();
    });
  }

  /**
   * Method updates view after new input is typed by user.
   *
   * @param input new input typed by user
   */
  onNewSearch(input: string): string {
    this.inputValue = input;
    this.ngOnInit();
    return this.inputValue;
  }

  /**
   * Open dialog with single result data.
   *
   * @param data data to be presented
   */
  showDetails(data: GetResultResponse): void {
    this.matDialog.open(ResultDetailsComponent, this.dialogConfig(data, ['dialog']));
  }

  /**
   * Method listens if the bottom of the page has been reached, if so, page number is increased and another request is send.
   */
  @HostListener('window:scroll', ['$event'])
  getBottomOfPage(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.pageNumber += 1;
      this.fetchData(this.pageNumber);
    }
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
