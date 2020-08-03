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
   return this.httpClient.get<any>('https://api.github.com/users');
    return of([]);
  }
}
