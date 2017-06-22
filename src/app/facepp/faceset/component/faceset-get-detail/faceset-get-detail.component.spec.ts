import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesetGetDetailComponent } from './faceset-get-detail.component';

describe('FacesetGetDetailComponent', () => {
  let component: FacesetGetDetailComponent;
  let fixture: ComponentFixture<FacesetGetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacesetGetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacesetGetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
