import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacesetCreateComponent } from './component/faceset-create/faceset-create.component';
import { FacesetAddFaceComponent } from './component/faceset-add-face/faceset-add-face.component';
import { FacesetRemoveFaceComponent } from './component/faceset-remove-face/faceset-remove-face.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FacesetCreateComponent, FacesetAddFaceComponent, FacesetRemoveFaceComponent]
})
export class FacesetModule { }
