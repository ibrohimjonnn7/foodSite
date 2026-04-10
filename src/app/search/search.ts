import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  
  searchTerm: String = "";
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.searchTerm = params['searchTerm'];
    })
  }

  search():void{
    if(this.searchTerm)
    this.router.navigateByUrl('/search/' + this.searchTerm);
  }
}
