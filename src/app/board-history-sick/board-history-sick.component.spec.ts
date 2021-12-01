import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardHistorySickComponent } from './board-history-sick.component';

describe('BoardHistorySickComponent', () => {
  let component: BoardHistorySickComponent;
  let fixture: ComponentFixture<BoardHistorySickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardHistorySickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardHistorySickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
