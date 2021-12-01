import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardListLeaveComponent } from './board-list-leave.component';

describe('BoardListLeaveComponent', () => {
  let component: BoardListLeaveComponent;
  let fixture: ComponentFixture<BoardListLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardListLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardListLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
