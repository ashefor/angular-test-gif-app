import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifDetailsComponent } from './gif-details.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GiphyService } from '../services/giphy.service';

describe('GifDetailsComponent', () => {
  let service: GiphyService;
  let mockHttp: HttpTestingController;
  let component: GifDetailsComponent;
  let fixture: ComponentFixture<GifDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]),
        HttpClientModule, HttpClientTestingModule],
      declarations: [GifDetailsComponent],
      providers: [
        GiphyService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(GiphyService)
    mockHttp = TestBed.get(HttpTestingController)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should search database with id and return results', () => {
    const mockResults =
    {
      type: 'gif',
      rating: 'pg',
      username: 'snl'
    }
    service.getASingleGif('l0HlSevxzZCTHyuQM').subscribe((res: any) => {
      expect(res.type).toEqual('gif');
      expect(res.rating).toEqual('pg');
      expect(res.username).toEqual('snl');
    })
    const req = mockHttp.expectOne('http://api.giphy.com/v1/gifs/l0HlSevxzZCTHyuQM?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc')

    req.flush(mockResults)
  })
});
