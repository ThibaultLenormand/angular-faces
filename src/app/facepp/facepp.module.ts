import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacesetModule } from './module/faceset/faceset.module';
import { FaceModule } from './module/face/face.module';
import { RouterModule } from '@angular/router';

import { DetectComponent } from './component/detect/detect.component';
import { CompareComponent } from './component/compare/compare.component';
import { SearchComponent } from './component/search/search.component';

import { ROUTES } from './facepp.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    declarations: [DetectComponent, CompareComponent, SearchComponent]
})
export class FaceppModule {

}
