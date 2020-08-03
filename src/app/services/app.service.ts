import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  private _theme:string = 'dark';
  
  get theme() {
    return this._theme;
  }

  set theme(theme:string) {
    this._theme = theme || 'dark';
  }



  getNavClass():string {

    if(this.theme === 'dark') {
      return 'navbar-dark bg-dark';
    } else {
      return 'navbar-light bg-light';
    }

  }
}
