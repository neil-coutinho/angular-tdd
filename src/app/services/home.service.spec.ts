import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeService } from './home.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


describe('HomeService', () => {
  let service: HomeService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('getHomes should return a list of homes', () => {
    httpClient = TestBed.get(HttpClient);
    const homesMock = [
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
     ];

     spyOn(httpClient, 'get').and.returnValue(of(homesMock));
     const spy = jasmine.createSpy('spy');

     service.getHomes().subscribe(spy);
     service.getHomes().subscribe((data) => console.log(data));

     expect(spy).toHaveBeenCalledWith(homesMock);
     expect(httpClient.get).toHaveBeenCalledWith('/homes');

  });
});
