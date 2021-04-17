import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurAddComponent } from './joueur-add.component';

describe('JoueurAddComponent', () => {
  let component: JoueurAddComponent;
  let fixture: ComponentFixture<JoueurAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoueurAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoueurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
