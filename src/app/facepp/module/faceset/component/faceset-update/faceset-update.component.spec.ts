import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesetUpdateComponent } from './faceset-update.component';

describe('FacesetUpdateComponent', () => {
  let component: FacesetUpdateComponent;
  let fixture: ComponentFixture<FacesetUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacesetUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacesetUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
