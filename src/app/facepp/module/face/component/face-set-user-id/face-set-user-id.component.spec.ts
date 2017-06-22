import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSetUserIdComponent } from './face-set-user-id.component';

describe('FaceSetUserIdComponent', () => {
  let component: FaceSetUserIdComponent;
  let fixture: ComponentFixture<FaceSetUserIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceSetUserIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceSetUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
