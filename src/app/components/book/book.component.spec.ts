import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from './book.component';
import { FormsModule } from '@angular/forms';
declare var require: any

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let homes = [];

  const el = (selector) => fixture.nativeElement.querySelector(selector);
 
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    homes = require('../../../assets/mocks/homes.json');

   
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
  
  
});
