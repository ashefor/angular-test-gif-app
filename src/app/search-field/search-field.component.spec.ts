import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFieldComponent } from './search-field.component';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;
  let searchform: DebugElement;
  let el: HTMLElement;
  let router: Router

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), ReactiveFormsModule, FormsModule],
      declarations: [SearchFieldComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFieldComponent);
    router = TestBed.get(Router)
    component = fixture.componentInstance;
    fixture.detectChanges();
    searchform = fixture.debugElement.query(By.css('form'))
    el = searchform.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test that search form is invalid', () => {
    component.Searchform.controls['search'].setValue('')
    expect(component.Searchform.valid).toBeFalsy()
  })
  it('should test that form is valid', () => {
    component.Searchform.controls['search'].setValue('denzel');
    expect(component.Searchform.valid).toBeTruthy()
  })
  it('should call submit', () => {
    spyOn(component, 'searchDb');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click()
    expect(component.searchDb).toHaveBeenCalledTimes(0)
  })
  it('should route to result-list component', () => {
    let searchterm = component.Searchform.value
    let navigateSpy = spyOn(router, 'navigate');
    component.searchDb(searchterm);
    expect(navigateSpy).toHaveBeenCalledWith(['/results'], { queryParams: { 'giphy-search': searchterm.search } })
  })
});
