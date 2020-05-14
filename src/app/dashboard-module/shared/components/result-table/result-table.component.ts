import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { IStateReport } from 'src/app/shared/interfaces/IStateReport.model';
import { IDistrictInfo } from '../../interfaces/IDistrictInfo.model';

import { ResultPopupComponent } from "../result-popup/result-popup.component";

import { DashboardService } from '../../../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.styl'],
  providers: [DashboardService],
})
export class ResultTableComponent implements OnInit {
  @Input() columnDisplay: string[];
  @Input() dataSource: any;
  @Input() clickEnable: boolean;


  districtReport: any;

  constructor(private dashboardService: DashboardService,public dialog: MatDialog ) {}

  ngOnInit(): void {
    this.getDistrictReport();
  }

  getDistrictReport() {
    this.dashboardService.getDistrictWiseList().subscribe((districtData) => {
      this.generateDistrictData(districtData);
    });
  }

  openPopup(stateData: IStateReport) {
    const tableData = {
      title: `${stateData.state} Districts Report`,
      columnDisplay: ['district', 'confirmed', 'active', 'recovered', 'deaths'],
      dataSource: this.getDistrictDataOfTheState(stateData.state),
      clickEnable: false
    }
    // const districtDataOfState: IDistrictInfo[]  = this.getDistrictDataOfTheState(stateData.state);
    // console.log("Result", districtDataOfState);
    const dialogRef = this.dialog.open(ResultPopupComponent, {
      width: '1000px',
      data: tableData
    });

  }

  /* Private Methods */

  private generateDistrictData(districtData) {
    this.districtReport = districtData;
  }

  private getDistrictDataOfTheState(state: string) : IDistrictInfo[] {
    const districtDataOfState  = this.getDistrictReportByState(state);
    const keys: string[] = Object.keys(districtDataOfState);
    const districtDatas: IDistrictInfo[] = this.buildDistrictDataOfState(districtDataOfState, keys);
    return districtDatas;
  }

  private getDistrictReportByState(stateName: string) {
    return this.districtReport[stateName].districtData;
  }

  private buildDistrictDataOfState(districtDataOfState, keys): IDistrictInfo[] {
    const districtDatas: IDistrictInfo[] = [];
    for(let i=0; i<keys.length; i++) {
      districtDatas.push(this.buildIDistrictObject(keys[i], districtDataOfState[keys[i]]));
    }
    return districtDatas;
  }

  private buildIDistrictObject(key, data): IDistrictInfo{
    return {
      district : key,
      active: data.active,
      confirmed: data.confirmed,
      deaths: data.deceased,
      recovered: data.recovered
    }
  }
}
