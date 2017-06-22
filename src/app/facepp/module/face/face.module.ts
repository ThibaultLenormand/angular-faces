import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FaceAnalyzeComponent } from './component/face-analyze/face-analyze.component';
import { FaceGetDetailComponent } from './component/face-get-detail/face-get-detail.component';
import { FaceSetUserIdComponent } from './component/face-set-user-id/face-set-user-id.component';

import { ROUTES } from './face.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES)
    ],
    declarations: [
        FaceAnalyzeComponent,
        FaceGetDetailComponent,
        FaceSetUserIdComponent
    ]
})
export class FaceModule { }
