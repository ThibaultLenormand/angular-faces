import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesetAddFaceComponent } from './faceset-add-face.component';

describe('FacesetAddFaceComponent', () => {
  let component: FacesetAddFaceComponent;
  let fixture: ComponentFixture<FacesetAddFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacesetAddFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacesetAddFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
