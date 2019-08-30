import { TestBed, async } from '@angular/core/testing';

import { GiphyService } from './giphy.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';

describe('GiphyService', () => {
  let service: GiphyService;
  let mockHttp: HttpTestingController;
  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule],
    providers: [
      GiphyService
    ]
  });
  service = TestBed.get(GiphyService)
  mockHttp = TestBed.get(HttpTestingController)
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
