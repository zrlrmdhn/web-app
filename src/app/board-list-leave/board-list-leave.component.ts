import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-list-leave',
  templateUrl: './board-list-leave.component.html',
  styleUrls: ['./board-list-leave.component.css'],
})
export class BoardListLeaveComponent implements OnInit {
  content: any[] = [];
  tableReady = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getCuti();
  }

  getCuti(): void {
    this.userService.getcuti().subscribe(
      async (data) => {
        this.content = data;
        await new Promise((f) => setTimeout(f, 1000));
        this.tableReady = true;
        console.log(this.content);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
