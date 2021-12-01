import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardStaffComponent } from './board-user.component';

describe('BoardUserComponent', () => {
  let component: BoardStaffComponent;
  let fixture: ComponentFixture<BoardStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardStaffComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
