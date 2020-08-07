import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let homes = [];
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    homes = [
      {
          "id": "100",
          "title": "House 1",
          "image": "assets/images/property.jpeg",
          "description": "Some description"
      },
      {
          "id": "200",
          "title": "House 2",
          "image": "assets/images/property.jpeg",
          "description": "Some description"
      },
      {
          "id": "300",
          "title": "House 3",
          "image": "assets/images/property.jpeg",
          "description": "Some description"
      }
  ];

   
    component.data = homes[0];
   
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //should show title
  it('should have a modal header with content = House 1', () => {
    expect(fixture.nativeElement.querySelector('[data-test="modal-header"] .modal-title').textContent).toBe('House 1');
  });
  //should show price per night
  //should show checkIn field
  //should show checkout field
  //should show total
  //should book after clicking book button
});
