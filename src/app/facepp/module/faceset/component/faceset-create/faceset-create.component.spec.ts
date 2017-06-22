import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesetCreateComponent } from './faceset-create.component';

describe('FacesetCreateComponent', () => {
  let component: FacesetCreateComponent;
  let fixture: ComponentFixture<FacesetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacesetCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacesetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
