import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  allGifsResult: any = [];
  constructor(private route: ActivatedRoute, private service: GiphyService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.service.searchDatabase(params['giphy-search']).subscribe((res: any)=>{
          console.log(res)
          this.allGifsResult = res.data;
          
        })
    })
  }

}
