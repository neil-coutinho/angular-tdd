import { Component, OnInit } from '@angular/core';
import { CommentStmt } from '@angular/compiler';
import * as moment from  'moment';
import { HomeService } from 'src/app/services/home.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  
  data:any;
  checkIn: string;
  checkOut: string;
  constructor(private homeService: HomeService,
    private activeModal: NgbActiveModal
    ) { }

  ngOnInit(): void {

    console.log(this.data);
  }

  calculateTotal(checkIn, checkOut) {

    let nights = 0;
    let cost = 0;

    let checkInDate, checkOutDate;
    if(checkIn && checkOut) {

      checkInDate = moment(checkIn, 'DD-MM-YYYY');
      checkOutDate = moment(checkOut, 'DD-MM-YYYY');
      console.log(checkInDate, checkOutDate);
      if(checkOutDate > checkInDate) {
        nights = checkOutDate.diff(checkInDate, 'days');
      }

      
    }
    console.log(nights);
   
    cost = (nights*this.data.price);

    return cost;

  }


  bookNow() {
    this.homeService.bookNow$()
      .subscribe((res) => {
        console.log(res);
        this.activeModal.close();
      });
  }

}
