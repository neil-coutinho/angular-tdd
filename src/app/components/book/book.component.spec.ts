import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from './book.component';
import { FormsModule } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';
import { spyOnClass } from 'jasmine-es6-spies';
import { NgbDatepickerKeyboardService } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
declare var require: any

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let homes = [];
  let homeService: jasmine.SpyObj<HomeService>;

  const el = (selector) => fixture.nativeElement.querySelector(selector);
 
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ BookComponent ],
      providers: [{
        provide: HomeService, useFactory: () => spyOnClass(HomeService)
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    homes = require('../../../assets/mocks/homes.json');
    homeService = TestBed.get(HomeService);
   
    component.data = homes[0];
   
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //should show title
  it('should have a modal header with content = House 1', () => {
    expect(el('[data-test="modal-header"] .modal-title').textContent).toContain('House 1');
  });
  //should show price per night

  it('should have a modal header with content = House 1', () => {
    expect(el('[data-test="modal-body"] .price').textContent)
      .toContain('100');
  });


  it('should have a checkIn field', () => {
    expect(el('[data-test="check-in"]'))
      .toBeTruthy();
  });

  it('should have a checkOut field', () => {
    expect(el('[data-test="check-out"]'))
      .toBeTruthy();
  });

  it('should show total', () => {
    expect(el('[data-test="total"]'))
      .toBeTruthy();
  });

  it('total should be $200 for 2 nights', () => {
    
    let checkIn = el('[data-test="check-in"]');
    let checkOut = el('[data-test="check-out"]');

    checkIn.value = '10-08-2020';
    checkIn.dispatchEvent(new Event('input'));

    checkOut.value = '12-08-2020';
    checkOut.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    
    
    expect(el('[data-test="total"]').textContent)
      .toBe('$200');
  });


  it('should have a book now button', () => {
    expect(el('[data-test="book-btn"]')).toBeTruthy();
  });


  it('should make a booking on click of book now button', () => {
    
    let checkIn = el('[data-test="check-in"]');
    let checkOut = el('[data-test="check-out"]');
    let bookBtn = el('[data-test="book-btn"]');

   homeService.bookNow$.and.returnValue(of({}));


    checkIn.value = '10-08-2020';
    checkIn.dispatchEvent(new Event('input'));

    checkOut.value = '12-08-2020';
    checkOut.dispatchEvent(new Event('input'));
   
    console.log(bookBtn);

    bookBtn.click();

    fixture.detectChanges();
    //call api service method to book to have been called
  
    expect(homeService.bookNow$).toHaveBeenCalled();
    
    
    
  });
  
  
});
