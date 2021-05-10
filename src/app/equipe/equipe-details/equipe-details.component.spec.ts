import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeDetailsComponent } from './equipe-details.component';

describe('EquipeDetailsComponent', () => {
  let component: EquipeDetailsComponent;
  let fixture: ComponentFixture<EquipeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
