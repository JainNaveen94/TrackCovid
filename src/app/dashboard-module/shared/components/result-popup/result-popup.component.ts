import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-result-popup',
  templateUrl: './result-popup.component.html',
  styleUrls: ['./result-popup.component.styl'],
})
export class ResultPopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ResultPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
