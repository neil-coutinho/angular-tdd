import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private appService: AppService) { }
  navClass: string = '';
  ngOnInit(): void {

    this.navClass = this.appService.getNavClass();

  }

}
