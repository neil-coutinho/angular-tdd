import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { spyOnClass } from 'jasmine-es6-spies';
import { HomeService } from 'src/app/services/home.service';
import { DialogService } from 'src/app/services/dialog.service';
import { of } from 'rxjs';




describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeService: jasmine.SpyObj<HomeService>;
  let dialogService: jasmine.SpyObj<DialogService>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[ NgbModule ],
      providers:[
        {
          provide: HomeService,
          useFactory: () => spyOnClass(HomeService)
        },
        {
          provide: DialogService,
          useFactory: () => spyOnClass(DialogService)
        }


      ]
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
   
  });

  beforeEach(() => {
    homeService = TestBed.get(HomeService);
    dialogService = TestBed.get(DialogService);
    homeService.getHomes.and.returnValue(of([
       {
          id: 100,
          title: `House 1`,
          image: `some-image`,
          description: `Some description`
        },
        {
          id: 200,
          title: `House 2`,
          image: `some-image`,
          description: `Some description`
        },
        {
          id: 300,
          title: `House 3`,
          image: `some-image`,
          description: `Some description`
        }
      ]));
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have tabs', () => {
    expect(fixture.nativeElement.querySelector('[data-test="home"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="dates"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="guests"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="price"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="rooms"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="amenities"]')).toBeTruthy();
  });


  it('should have 3 homes', () => {
   
    expect(fixture.nativeElement.querySelectorAll('[data-test="home-item"]').length).toBe(3)
  });


  it('should have title image and description', () => {

    const home  =  fixture.nativeElement.querySelector('[data-test="home-item"]');
    expect(home.querySelector('[data-test="title"]').innerText).toEqual('House 1');
    expect(home.querySelector('[data-test="image"]')).toBeTruthy();
    
  });


  it('should have a book button', () => {

    const homeItem = fixture.nativeElement.querySelector('[data-test="home-item"]');
    expect(homeItem.querySelector('[data-test="book-btn"]')).toBeTruthy();

  });



  it('should call dialog service open method', () => {
    
    const bookBtn = fixture.nativeElement.querySelector('[data-test="book-btn"] button');
    bookBtn.click();
    expect(dialogService.open).toHaveBeenCalled();

  });

});
