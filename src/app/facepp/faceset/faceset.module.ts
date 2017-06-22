import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacesetCreateComponent } from './component/faceset-create/faceset-create.component';
import { FacesetAddFaceComponent } from './component/faceset-add-face/faceset-add-face.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FacesetCreateComponent, FacesetAddFaceComponent]
})
export class FacesetModule { }
