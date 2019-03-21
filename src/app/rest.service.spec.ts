import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';

describe('RestService', () => {
  beforeEach(() => TestBed.configureTestingModule({ 
    imports: [
    HttpClientModule]}));

  it('should be created', () => {
    const service: RestService = TestBed.get(RestService);
    expect(service).toBeTruthy();
  });
});
