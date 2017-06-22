import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesetRemoveFaceComponent } from './faceset-remove-face.component';

describe('FacesetRemoveFaceComponent', () => {
  let component: FacesetRemoveFaceComponent;
  let fixture: ComponentFixture<FacesetRemoveFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacesetRemoveFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacesetRemoveFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
