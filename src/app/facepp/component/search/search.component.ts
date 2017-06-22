import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() url: string;
  faceset = 4684656178;
  apiResult;

  constructor(public searchService: SearchService) { }

  send(url: string, faceset: string) {
    this.searchService.getData(url, faceset).subscribe((data) => {
      this.apiResult = data;
    });
  }

  ngOnInit() {
  }

}
