import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HomeService } from '../../services/home.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private homeService: HomeService,
    private dialogService: DialogService) { }
  active = 1;
  homes$:Observable<Array<any>>;

  ngOnInit(): void {

    this.homes$ = this.homeService.getHomes();

    // this.homes$ = of([
      
    //   {
    //     id: 100,
    //     title: `House 1`,
    //     image: `some-image`,
    //     description: `Some description`
    //   },
    //   {
    //     id: 200,
    //     title: `House 2`,
    //     image: `some-image`,
    //     description: `Some description`
    //   },
    //   {
    //     id: 300,
    //     title: `House 3`,
    //     image: `some-image`,
    //     description: `Some description`
    //   }
    // ]);


  }

  openDialog() {
    this.dialogService.open();
  }

}
