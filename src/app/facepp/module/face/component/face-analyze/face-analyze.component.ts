import { Component, OnInit } from '@angular/core';
import {FaceAnalyzeService} from '../../service/face-analyze.service';

@Component({
  selector: 'app-face-analyze',
  templateUrl: './face-analyze.component.html',
  styleUrls: ['./face-analyze.component.css']
})
export class FaceAnalyzeComponent implements OnInit {

  placeholder = 'Image URL';
  limit = 3;
  inputs = [{value: ''}];
  apiResult = false;
  addInput()  {
    if (this.limit > 0) {
      this.inputs.push({value: ''});
      this.apiResult = false;
      this.limit--;
    }
  }

  constructor(public faceAnalyzeService: FaceAnalyzeService) { }

  ngOnInit() {
  }

  send(inputs) {
    let urls = new Array;
    for(let input in inputs) {
      urls.push(inputs[input].value);
    }
    this.faceAnalyzeService.getData(urls).subscribe((data) => {
      console.log(data);
      this.apiResult = data;
    });
  }

}
