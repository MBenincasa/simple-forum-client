import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RispostePageComponent } from './risposte-page.component';

describe('RispostePageComponent', () => {
  let component: RispostePageComponent;
  let fixture: ComponentFixture<RispostePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RispostePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RispostePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
