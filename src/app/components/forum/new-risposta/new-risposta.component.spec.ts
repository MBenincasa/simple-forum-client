import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRispostaComponent } from './new-risposta.component';

describe('NewRispostaComponent', () => {
  let component: NewRispostaComponent;
  let fixture: ComponentFixture<NewRispostaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRispostaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRispostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
