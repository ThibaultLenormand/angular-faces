import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceAnalyzeComponent } from './component/face-analyze/face-analyze.component';
import { FaceGetDetailComponent } from './component/face-get-detail/face-get-detail.component';
import { FaceSetUserIdComponent } from './component/face-set-user-id/face-set-user-id.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FaceAnalyzeComponent, FaceGetDetailComponent, FaceSetUserIdComponent]
})
export class FaceModule { }
