import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListComponent } from './results-list.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { GiphyService } from '../services/giphy.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ResultsListComponent', () => {
  let component: ResultsListComponent;
  let fixture: ComponentFixture<ResultsListComponent>;
  let mockHttp: HttpTestingController;
  let service: GiphyService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientModule, HttpClientTestingModule],
      declarations: [ResultsListComponent],
      providers: [
        GiphyService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(GiphyService)
    mockHttp = TestBed.get(HttpTestingController)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should search database with search parameter and return results', () => {
    const mockResults =
    {
      type: 'gif',
      rating: 'pg',
      id: '11TU9wJqEtr2ZW'
    }
    service.searchDatabase('denzel').subscribe((res: any) => {
      expect(res.type).toEqual('gif');
      expect(res.rating).toEqual('pg');
      expect(res.id).toEqual('11TU9wJqEtr2ZW');
    })

    const req = mockHttp.expectOne((req: HttpRequest<any>) => req.urlWithParams == 'http://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=denzel&limit=50')
    req.flush(mockResults)
    // mockHttp.verify()
  })
});
