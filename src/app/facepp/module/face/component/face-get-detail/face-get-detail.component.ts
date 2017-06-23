import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FaceGetDetailService} from '../../service/face-get-detail.service';

@Component({
  selector: 'app-face-get-detail',
  templateUrl: './face-get-detail.component.html',
  styleUrls: ['./face-get-detail.component.css']
})
export class FaceGetDetailComponent implements OnInit {
  apiResult = false;
  @ViewChild('draw') draw: ElementRef;

  constructor(public faceGetDetailService: FaceGetDetailService) { }

  ngOnInit() {
  }

  send() {
    this.faceGetDetailService.getData().subscribe((data) => {
      console.log(data);
      this.apiResult = data;
      let xx = data.face_rectangle.width;
      let xy = data.face_rectangle.top;
      let yx = data.face_rectangle.left;
      let yy = data.face_rectangle.height;
      let canvas = this.draw.nativeElement;
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = '#e74c3c';
      ctx.fillRect(xx,xy,yx,yy);
    });
  }
}
