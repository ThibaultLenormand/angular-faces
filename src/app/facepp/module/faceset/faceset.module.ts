import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FacesetCreateComponent } from './component/faceset-create/faceset-create.component';
import { FacesetAddFaceComponent } from './component/faceset-add-face/faceset-add-face.component';
import { FacesetRemoveFaceComponent } from './component/faceset-remove-face/faceset-remove-face.component';
import { FacesetUpdateComponent } from './component/faceset-update/faceset-update.component';
import { FacesetGetDetailComponent } from './component/faceset-get-detail/faceset-get-detail.component';
import { FacesetDeleteComponent } from './component/faceset-delete/faceset-delete.component';
import { FacesetGetFaceSetsComponent } from './component/faceset-get-face-sets/faceset-get-face-sets.component';

import { ROUTES } from './faceset.routes';


import { FacesetAddFaceService } from './service/faceset-add-face.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [FacesetCreateComponent, FacesetAddFaceComponent, FacesetRemoveFaceComponent, FacesetUpdateComponent, FacesetGetDetailComponent, FacesetDeleteComponent, FacesetGetFaceSetsComponent],
providers: [
    FacesetAddFaceService
]
    
})
export class FacesetModule { }
