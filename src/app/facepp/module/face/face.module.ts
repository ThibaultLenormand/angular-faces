import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FaceAnalyzeComponent } from './component/face-analyze/face-analyze.component';
import { FaceGetDetailComponent } from './component/face-get-detail/face-get-detail.component';
import { FaceSetUserIdComponent } from './component/face-set-user-id/face-set-user-id.component';



import { ROUTES } from './face.routes';
import {FaceAnalyzeService} from './service/face-analyze.service';
import {FaceGetDetailService} from './service/face-get-detail.service';
import {FaceSetUserIdService} from './service/face-set-user-id.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES),
        FormsModule
    ],
    declarations: [
        FaceAnalyzeComponent,
        FaceGetDetailComponent,
        FaceSetUserIdComponent
    ],
    providers: [
        FaceAnalyzeService,
        FaceGetDetailService,
        FaceSetUserIdService
    ]
})
export class FaceModule { }
