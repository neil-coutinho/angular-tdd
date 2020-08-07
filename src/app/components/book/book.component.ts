import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  
  data:any;
  constructor() { }

  ngOnInit(): void {

    console.log(this.data);
  }

}
