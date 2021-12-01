import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardHistoryLeaveComponent } from './board-history-leave.component';

describe('BoardHistoryLeaveComponent', () => {
  let component: BoardHistoryLeaveComponent;
  let fixture: ComponentFixture<BoardHistoryLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardHistoryLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardHistoryLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
