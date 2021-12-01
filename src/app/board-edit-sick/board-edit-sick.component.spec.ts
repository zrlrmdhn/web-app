import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardEditSickComponent } from './board-edit-sick.component';

describe('BoardEditSickComponent', () => {
  let component: BoardEditSickComponent;
  let fixture: ComponentFixture<BoardEditSickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardEditSickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardEditSickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
