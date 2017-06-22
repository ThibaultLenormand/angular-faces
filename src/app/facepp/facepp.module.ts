import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacesetModule } from './module/faceset/faceset.module';
import { FaceModule } from './module/face/face.module';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { DetectComponent } from './component/detect/detect.component';
import { CompareComponent } from './component/compare/compare.component';
import { SearchComponent } from './component/search/search.component';

import { DetectService } from './service/detect.service';

import { ROUTES } from './facepp.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES),
        FaceModule,
        FacesetModule,
        HttpModule
    ],
    declarations: [DetectComponent, CompareComponent, SearchComponent],
    providers: [
        DetectService
    ]
})
export class FaceppModule {

}
