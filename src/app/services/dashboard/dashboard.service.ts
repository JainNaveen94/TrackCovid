import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private STATE_WISE_API_URL: string = "https://api.covid19india.org/data.json";
  private DISTRICT_WISE_API_URL: string = "https://api.covid19india.org/state_district_wise.json";

  constructor(private httpClient: HttpClient) { }

  getStateWiseList(){
    return this.httpClient.get(this.STATE_WISE_API_URL);
  }
  getDistrictWiseList(){
    return this.httpClient.get(this.DISTRICT_WISE_API_URL);
  }
}
