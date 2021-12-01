import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardLeaveComponent } from './board-leave.component';

describe('BoardLeaveComponent', () => {
  let component: BoardLeaveComponent;
  let fixture: ComponentFixture<BoardLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
