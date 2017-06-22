import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() url: string;
  @Input() faceset: string;
  constructor(public searchService: SearchService) { }

  send(url: string, faceset: string) {
    this.searchService.getData(url, faceset).subscribe((data) => {
      console.log(data.results[0].confidence);

    });
  }

  ngOnInit() {
  }

}
