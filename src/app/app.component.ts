import { Component, OnInit } from '@angular/core';
import { UserService } from './_services/user.service';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private roles: string;
  isLoggedIn = false;
  showManagementBoard = false;
  showStaffBoard = false;
  email: string;
  title: any;
  currentUser: any;

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showManagementBoard = this.roles.includes('management');
      this.showStaffBoard = true;

      this.email = user.email;
    }

    this.currentUser = this.tokenStorageService.getUser();
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
