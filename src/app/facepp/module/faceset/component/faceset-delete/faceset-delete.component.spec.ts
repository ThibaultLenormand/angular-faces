import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesetDeleteComponent } from './faceset-delete.component';

describe('FacesetDeleteComponent', () => {
  let component: FacesetDeleteComponent;
  let fixture: ComponentFixture<FacesetDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacesetDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacesetDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
