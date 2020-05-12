import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError  } from 'rxjs/operators';

import { INews } from 'src/app/shared/interfaces/INews.model';
import { ThrowStmt } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private API_URL: string = 'api/newsInfo';
  private newsData: INews[];

  constructor(private httpClient: HttpClient) {}

  /** Method to get all News data. */
  getNews(): Observable<INews[]> {
    // this.httpClient.get<INews[]>(this.API_URL).subscribe((data) => {
    //   this.newsData = data;
    //   console.log("------------>", JSON.stringify(this.newsData));
    // });
    return this.httpClient.get<INews[]>(this.API_URL);
  }

  addNews(news: INews): Observable<INews> {
    console.log(">>>>>>>>>>>>>>", JSON.stringify(news));
    return this.httpClient.post<INews>(this.API_URL, news, httpOptions).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };



}
