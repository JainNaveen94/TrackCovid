import { Component, OnInit } from '@angular/core';
import { IPrecaution } from 'src/app/shared/interfaces/IPrecaution.model';

@Component({
  selector: 'app-precaution',
  templateUrl: './precaution.component.html',
  styleUrls: ['./precaution.component.styl']
})
export class PrecautionComponent implements OnInit {

  precautionTitle: string = "STAY HOME. SAVE LIVES"
  precautions: IPrecaution[] = [
    {
      title: 'Wash your hands often',
      uri: '../../../assets/precaution/wash.png'
    },
    {
      title: 'Say no to hands Shake',
      uri: '../../../assets/precaution/hand.png'
    },
    {
      title: 'Cover Your Face',
      uri: '../../../assets/precaution/face.png'
    },
    {
      title: 'Do every day yoga or exercise',
      uri: '../../../assets/precaution/yoga.png'
    },
    {
      title: 'Daily Watch News For Update',
      uri: '../../../assets/precaution/news.png'
    },
    {
      title: 'FeeL sick? Take Treatment',
      uri: '../../../assets/precaution/treat.png'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
