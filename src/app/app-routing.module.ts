import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardStaffComponent } from './board-user/board-user.component';
import { BoardManagementComponent } from './board-admin/board-admin.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import { BoardHistoryComponent } from './board-history/board-history.component';
import { BoardEditComponent } from './board-edit/board-edit.component';
import { BoardLeaveComponent } from './board-leave/board-leave.component';
import { BoardListLeaveComponent } from './board-list-leave/board-list-leave.component';
import { BoardDetailsLeaveComponent } from './board-details-leave/board-details-leave.component';
import { BoardSickComponent } from './board-sick/board-sick.component';
import { BoardListSickComponent } from './board-list-sick/board-list-sick.component';
import { BoardHistoryLeaveComponent } from './board-history-leave/board-history-leave.component';
import { BoardDetailsSickComponent } from './board-details-sick/board-details-sick.component';
import { BoardHistorySickComponent } from './board-history-sick/board-history-sick.component';
import { BoardEditLeaveComponent } from './board-edit-leave/board-edit-leave.component';
import { BoardEditSickComponent } from './board-edit-sick/board-edit-sick.component';
import { AllUserComponent } from './all-user/all-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: AllUserComponent },
  { path: 'lembur', component: BoardStaffComponent },
  { path: 'cuti', component: BoardLeaveComponent },
  { path: 'sakit', component: BoardSickComponent },
  { path: 'management/lembur', component: BoardManagementComponent },
  { path: 'management/cuti', component: BoardListLeaveComponent },
  { path: 'management/sakit', component: BoardListSickComponent },
  { path: 'details/lembur/:id', component: BoardDetailComponent },
  { path: 'details/cuti/:id', component: BoardDetailsLeaveComponent },
  { path: 'details/sakit/:id', component: BoardDetailsSickComponent },
  { path: 'history/lembur', component: BoardHistoryComponent },
  { path: 'history/cuti', component: BoardHistoryLeaveComponent },
  { path: 'history/sakit', component: BoardHistorySickComponent },
  { path: 'edit/lembur/:id', component: BoardEditComponent },
  { path: 'edit/cuti/:id', component: BoardEditLeaveComponent },
  { path: 'edit/sakit/:id', component: BoardEditSickComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
