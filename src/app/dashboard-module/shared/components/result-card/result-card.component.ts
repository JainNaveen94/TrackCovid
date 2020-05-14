import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.styl']
})
export class ResultCardComponent implements OnInit {

  @Input() title: string;
  @Input() value: string;
  @Input() uri: string;

  constructor() { }

  ngOnInit(): void {
  }

}
