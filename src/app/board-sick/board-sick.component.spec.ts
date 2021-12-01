import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSickComponent } from './board-sick.component';

describe('BoardSickComponent', () => {
  let component: BoardSickComponent;
  let fixture: ComponentFixture<BoardSickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardSickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardSickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
