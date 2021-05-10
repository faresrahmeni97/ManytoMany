import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurUpdateComponent } from './joueur-update.component';

describe('JoueurUpdateComponent', () => {
  let component: JoueurUpdateComponent;
  let fixture: ComponentFixture<JoueurUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoueurUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoueurUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
