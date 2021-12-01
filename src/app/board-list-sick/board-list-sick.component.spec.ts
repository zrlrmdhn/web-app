import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardListSickComponent } from './board-list-sick.component';

describe('BoardListSickComponent', () => {
  let component: BoardListSickComponent;
  let fixture: ComponentFixture<BoardListSickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardListSickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardListSickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
