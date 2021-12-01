import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardManagementComponent } from './board-admin.component';

describe('BoardAdminComponent', () => {
  let component: BoardManagementComponent;
  let fixture: ComponentFixture<BoardManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardManagementComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
