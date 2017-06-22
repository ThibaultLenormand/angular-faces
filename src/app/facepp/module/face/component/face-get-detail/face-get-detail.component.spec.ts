import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceGetDetailComponent } from './face-get-detail.component';

describe('FaceGetDetailComponent', () => {
  let component: FaceGetDetailComponent;
  let fixture: ComponentFixture<FaceGetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceGetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceGetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
