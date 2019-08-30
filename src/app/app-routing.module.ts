import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsListComponent } from './results-list/results-list.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { GifDetailsComponent } from './gif-details/gif-details.component';

const routes: Routes = [
  {
    path: '', component: SearchFieldComponent, children: [
      {
        path: 'results', component: ResultsListComponent
      },
    ]
  },
  {
    path: 'gif-details/:id', component: GifDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
