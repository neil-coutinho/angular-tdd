import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { 

  }


  getHomes() {
    //@todo Return homes via API call
   return this.httpClient.get<any>('/assets/mocks/homes.json');
    //return of([]);
  }

  bookNow$() {
    console.log('in book now');
    return this.httpClient.post('https://run.mocky.io/v3/c2c1fd45-2d2d-447e-a4fa-0a870717eb2e',{});
    //return of({});
  }
}
