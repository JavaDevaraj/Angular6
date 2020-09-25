import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuraltestComponent } from './structuraltest.component';

describe('StructuraltestComponent', () => {
  let component: StructuraltestComponent;
  let fixture: ComponentFixture<StructuraltestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuraltestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuraltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
