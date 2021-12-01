import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-history-leave',
  templateUrl: './board-history-leave.component.html',
  styleUrls: ['./board-history-leave.component.css'],
})
export class BoardHistoryLeaveComponent implements OnInit {
  content: any[] = [];
  managers: any[];
  tableReady = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getManager().subscribe(
      (data) => {
        this.managers = data;
      },
      (err) => {
        this.managers = [];
      }
    );
    this.getHistory();
  }

  getHistory(): void {
    this.userService.getcuti().subscribe(
      async (data) => {
        this.content = data;
        await new Promise((f) => setTimeout(f, 1000));
        this.tableReady = true;
        console.log(data);
      },
      (error) => {
        this.content = JSON.parse(error.error).message;
      }
    );
  }
}
