import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AppService } from 'src/app/services/app.service';
import { spyOnClass } from 'jasmine-es6-spies';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let appService: jasmine.SpyObj<AppService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        {
          provide: AppService,
          useFactory: () => spyOnClass(AppService),
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    appService = TestBed.get(AppService);
    component = fixture.componentInstance;
    
    // fixture.detectChanges();
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have logo', () => {
    expect(fixture.nativeElement.querySelector('[data-test="logo"]')).toBeTruthy();
  });

  it('should have search', () => {
    expect(fixture.nativeElement.querySelector('[data-test="search"]')).toBeTruthy();
  });

  it('should have navbar', () => {
    expect(fixture.nativeElement.querySelector('[data-test="navbar"]')).toBeTruthy();
  });

  it('should have bg-dark and navbar-dark classes when theme is = dark', () => {
   //appService.theme = 'dark'
    appService.getNavClass.and.returnValue('bg-dark navbar-dark');
    fixture.detectChanges();
    expect(component.navClass).toBe('bg-dark navbar-dark')
  });


  

});
