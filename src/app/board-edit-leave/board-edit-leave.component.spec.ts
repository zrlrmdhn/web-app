import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardEditLeaveComponent } from './board-edit-leave.component';

describe('BoardEditLeaveComponent', () => {
  let component: BoardEditLeaveComponent;
  let fixture: ComponentFixture<BoardEditLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardEditLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardEditLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
