import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { 

  }


  getHomes() {
    //@todo Return homes via API call
    return of([]);
  }
}
