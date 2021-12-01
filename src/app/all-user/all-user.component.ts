import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css'],
})
export class AllUserComponent implements OnInit {
  users: any[];
  currentUser: any;
  tableReady = false;

  constructor(
    private userService: UserService,
    private token: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(): void {
    this.userService.getAllUser().subscribe(
      async (data) => {
        this.users = data;
        await new Promise((f) => setTimeout(f, 1000));
        this.tableReady = true;
        console.log(data);
      },
      (error) => {
        this.users = [];
      }
    );
    this.currentUser = this.token.getUser();
  }
}
