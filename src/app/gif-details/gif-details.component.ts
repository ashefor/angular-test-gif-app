import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-gif-details',
  templateUrl: './gif-details.component.html',
  styleUrls: ['./gif-details.component.css']
})
export class GifDetailsComponent implements OnInit {
  allgifs = {}
  constructor(private router: ActivatedRoute, private service: GiphyService) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params)=>{
      // console.log(params['id'])
      this.service.getASingleGif(params['id']).subscribe((data: any) =>{
        
        this.allgifs = data.data
        console.log(this.allgifs)
      })
    })
  }

}
