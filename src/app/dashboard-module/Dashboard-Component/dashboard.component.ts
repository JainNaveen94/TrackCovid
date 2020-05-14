import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../services/dashboard/dashboard.service';

import { IStateReport } from '../../shared/interfaces/IStateReport.model';
import { ICaseReport } from '../shared/interfaces/ICaseReport.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl'],
  providers: [DashboardService],
})
export class DashboardComponent implements OnInit {
  stateReport: IStateReport[];
  // districtReport: any;
  columnDisplay: string[] = [
    'state',
    'confirmed',
    'active',
    'recovered',
    'deaths',
  ];
  totalCaseReport: ICaseReport[] = [
    {
      title: 'Confirmed',
      value: '',
      uri: '../../../assets/dashboard/total.gif',
    },
    {
      title: 'Active',
      value: '',
      uri: '../../../assets/dashboard/confirmed.png',
    },
    {
      title: 'Recovered',
      value: '',
      uri: '../../../assets/dashboard/recovered.png',
    },
    {
      title: 'Deaths',
      value: '',
      uri: '../../../assets/dashboard/death.png',
    },
  ];
  enablePopup: boolean = true;

  constructor(private dashboardService: DashboardService) {
    // const waste: IStateReport = {
    //   active: '15000',
    //   confirmed: '20000',
    //   recovered: '3000',
    //   deaths: '2000',
    //   state: 'USA',
    //   statecode: '100',
    // };
    // this.stateReport.push(waste);
    // this.stateReport.push(waste);
    // this.stateReport.push(waste);
    // this.stateReport.push(waste);
    // this.stateReport.push(waste);
    // this.stateReport.push(waste);
    // this.stateReport.push(waste);
    // this.stateReport.push(waste);
    // this.stateReport.push(waste);
  }

  ngOnInit(): void {
    this.getStateReport();
    // this.getDistrictReport();
  }

  getStateReport() {
    this.dashboardService.getStateWiseList().subscribe((stateData) => {
      this.generateStateData(stateData);
    });
  }

  // getDistrictReport() {
  //   this.dashboardService.getDistrictWiseList().subscribe((districtData) => {
  //     this.generateDistrictData(districtData);
  //   });
  // }

  // getDistrictReportByState(stateName: string) {
  //   return this.districtReport[stateName].districtData;
  // }

  /* Private Methods */

  private generateStateData(stateData) {
    this.totalCaseReport[0].value = stateData.statewise[0].confirmed;
    this.totalCaseReport[1].value = stateData.statewise[0].active;
    this.totalCaseReport[2].value = stateData.statewise[0].recovered;
    this.totalCaseReport[3].value = stateData.statewise[0].deaths;
    this.stateReport = stateData.statewise.slice(1);
  }

  // private generateDistrictData(districtData) {
  //   this.districtReport = districtData;
  // }
}
