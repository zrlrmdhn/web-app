import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDetailsLeaveComponent } from './board-details-leave.component';

describe('BoardDetailsLeaveComponent', () => {
  let component: BoardDetailsLeaveComponent;
  let fixture: ComponentFixture<BoardDetailsLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDetailsLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDetailsLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
