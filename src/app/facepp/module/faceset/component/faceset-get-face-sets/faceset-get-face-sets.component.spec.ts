import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesetGetFaceSetsComponent } from './faceset-get-face-sets.component';

describe('FacesetGetFaceSetsComponent', () => {
  let component: FacesetGetFaceSetsComponent;
  let fixture: ComponentFixture<FacesetGetFaceSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacesetGetFaceSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacesetGetFaceSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
