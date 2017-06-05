import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonhangenComponent } from './monhangen.component';

describe('MonhangenComponent', () => {
  let component: MonhangenComponent;
  let fixture: ComponentFixture<MonhangenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonhangenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonhangenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
