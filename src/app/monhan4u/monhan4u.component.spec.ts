import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Monhan4uComponent } from './monhan4u.component';

describe('Monhan4uComponent', () => {
  let component: Monhan4uComponent;
  let fixture: ComponentFixture<Monhan4uComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Monhan4uComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Monhan4uComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
