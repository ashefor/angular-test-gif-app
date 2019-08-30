import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = 'Search Field';
    Searchform: FormGroup
    constructor(private fb: FormBuilder, private route: Router) {
    }

    ngOnInit() {
        this.Searchform = this.fb.group({
            search: ['', Validators.required]
        })
    }

    searchDb(formValue){
        let query: string = formValue.search
        this.route.navigate(['/results'], {queryParams: {'giphy-search': query}})
    }
}
