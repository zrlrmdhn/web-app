import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardManagementComponent } from './board-admin/board-admin.component';

import { BoardStaffComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import id from '@angular/common/locales/id';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import { BoardHistoryComponent } from './board-history/board-history.component';
import { BoardEditComponent } from './board-edit/board-edit.component';
import { BoardLeaveComponent } from './board-leave/board-leave.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
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

registerLocaleData(id);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardManagementComponent,

    BoardStaffComponent,

    BoardDetailComponent,

    BoardHistoryComponent,

    BoardEditComponent,

    BoardLeaveComponent,

    BoardListLeaveComponent,

    BoardDetailsLeaveComponent,

    BoardSickComponent,

    BoardListSickComponent,

    BoardHistoryLeaveComponent,

    BoardDetailsSickComponent,

    BoardHistorySickComponent,

    BoardEditLeaveComponent,

    BoardEditSickComponent,

    AllUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxDaterangepickerMd.forRoot(),
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
