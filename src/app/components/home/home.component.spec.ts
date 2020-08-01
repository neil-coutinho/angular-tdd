import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SpyOnClass } from 'jasmine-es6-spies';
import { HomeService } from 'src/app/services/home.service';




describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[ NgbModule ],
      providers:[
        {
          provide: HomeService,
          useFactory: () =>{

          }
        }
      ]
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
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

});
