import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDetailsSickComponent } from './board-details-sick.component';

describe('BoardDetailsSickComponent', () => {
  let component: BoardDetailsSickComponent;
  let fixture: ComponentFixture<BoardDetailsSickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDetailsSickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDetailsSickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
