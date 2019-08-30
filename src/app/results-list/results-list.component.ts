import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GiphyService } from '../services/giphy.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  allGifsResult: any[] = [];
  transfer;
  offsetamt;
  totalResults: number
  noofpagess: number;
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  offset = new BehaviorSubject(null);
  constructor(private route: ActivatedRoute, private service: GiphyService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {

      this.populateDb(params['giphy-search'], 50, this.offsetamt)
      this.transfer = params['giphy-search']
      console.log(this.transfer)
    })
  }

  populateDb(arg, limit, ofset) {
    this.service.searchDatabase(arg, limit, ofset).subscribe((res: any) => {
      this.allGifsResult = res.data;
      this.totalResults = res.pagination.total_count;
      this.noofpagess = Math.ceil(this.totalResults/limit)
    })
  }

  handler(event, offsetparam) {
   
    offsetparam = 50
    let arr = []
    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    for(let i = 1; i < this.noofpagess; i++){
      console.log(i)
      if (end === total) {
        if(this.totalResults >= this.allGifsResult.length){
           this.offset.next(offsetparam * i);
           this.offset.subscribe(det=>{
             this.service.searchDatabase(this.transfer, 50, det).subscribe((newd:any)=>{
              if(newd){
                arr = newd.data
                if(this.totalResults >= this.allGifsResult.length){
                  this.allGifsResult = this.allGifsResult.concat(arr)
                }
                else{
                  console.log('no more space')
                }
              }
             })
           })
          
         
        }else{
          // this.offset.unsubscribe()
        }
      }
   }
  }

}
