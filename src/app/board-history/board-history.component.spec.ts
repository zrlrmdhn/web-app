import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardHistoryComponent } from './board-history.component';

describe('BoardHistoryComponent', () => {
  let component: BoardHistoryComponent;
  let fixture: ComponentFixture<BoardHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
