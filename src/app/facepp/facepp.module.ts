import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacesetModule } from './module/faceset/faceset.module';
import { DetectComponent } from './component/detect/detect.component';
import { CompareComponent } from './component/compare/compare.component';
import { SearchComponent } from './component/search/search.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [DetectComponent, CompareComponent, SearchComponent]
})
export class FaceppModule {
    
}
