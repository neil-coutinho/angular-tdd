import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private ngbModalService: NgbModal) { }


  open(component, data) {
   const modalRef = this.ngbModalService.open(component);
   modalRef.componentInstance.data = data;
   
  }
}
