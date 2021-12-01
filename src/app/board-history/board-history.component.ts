import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-history',
  templateUrl: './board-history.component.html',
  styleUrls: ['./board-history.component.css'],
})
export class BoardHistoryComponent implements OnInit {
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
    this.userService.getAll().subscribe(
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
