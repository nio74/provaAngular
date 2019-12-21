import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSxComponent } from './side-sx.component';

describe('SideSxComponent', () => {
  let component: SideSxComponent;
  let fixture: ComponentFixture<SideSxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideSxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
