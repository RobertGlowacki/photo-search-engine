import { Component, Input, OnInit } from '@angular/core';
import { SearchEngineService } from '../service/search-engine.service';
import { GetSingleResult } from '../model/get-single-result';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  @Input()
  inputValue: string;

  results: GetSingleResult[];

  constructor(private searchEngineService: SearchEngineService, private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.searchEngineService.getResponse(this.inputValue).subscribe(response => this.results = response.body.results);
  }

  showDetails(data): void {
    this.matDialog.open(ResultDisplayComponent, this.dialogConfig(data, 'result-details' ));
  }

  private dialogConfig(data, panelClass): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    dialogConfig.panelClass = panelClass;
    return dialogConfig;
  }

}
