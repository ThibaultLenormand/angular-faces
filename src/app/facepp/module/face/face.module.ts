import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceAnalyzeComponent } from './component/face-analyze/face-analyze.component';
import { FaceGetDetailComponent } from './component/face-get-detail/face-get-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FaceAnalyzeComponent, FaceGetDetailComponent]
})
export class FaceModule { }
