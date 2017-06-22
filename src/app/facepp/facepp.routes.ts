import { Routes } from '@angular/router';
import { CompareComponent } from './component/compare/compare.component';
import { DetectComponent } from './component/detect/detect.component';
import { SearchComponent } from './component/search/search.component';

export const ROUTES: Routes = [
  { path: 'compare', component: CompareComponent },
  { path: 'detect', component: DetectComponent },
  { path: 'search', component: SearchComponent }
];
