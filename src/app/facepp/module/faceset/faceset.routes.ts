import { Routes } from '@angular/router';
import { FacesetAddFaceComponent } from './component/faceset-add-face/faceset-add-face.component';
import { FacesetCreateComponent } from './component/faceset-create/faceset-create.component';
import { FacesetDeleteComponent } from './component/faceset-delete/faceset-delete.component';
import { FacesetGetDetailComponent } from './component/faceset-get-detail/faceset-get-detail.component';
import { FacesetGetFaceSetsComponent } from './component/faceset-get-face-sets/faceset-get-face-sets.component';
import { FacesetRemoveFaceComponent } from './component/faceset-remove-face/faceset-remove-face.component';
import { FacesetUpdateComponent } from './component/faceset-update/faceset-update.component';

export const ROUTES: Routes = [
  { path: 'faceset/addface', component: FacesetAddFaceComponent },
  { path: 'faceset/create', component: FacesetCreateComponent },
  { path: 'faceset/delete', component: FacesetDeleteComponent },
  { path: 'faceset/details', component: FacesetGetDetailComponent },
  { path: 'faceset/list', component: FacesetGetFaceSetsComponent },
  { path: 'faceset/remove', component: FacesetRemoveFaceComponent },
  { path: 'faceset/update', component: FacesetUpdateComponent }
];
