import { Routes } from '@angular/router';

import { FaceAnalyzeComponent } from './component/face-analyze/face-analyze.component';
import { FaceGetDetailComponent } from './component/face-get-detail/face-get-detail.component';
import { FaceSetUserIdComponent } from './component/face-set-user-id/face-set-user-id.component';

export const ROUTES: Routes = [
  { path: 'face/analyze', component: FaceAnalyzeComponent },
  { path: 'face/details', component: FaceGetDetailComponent },
  { path: 'face/set-user-id', component: FaceSetUserIdComponent }
];
