import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-history-sick',
  templateUrl: './board-history-sick.component.html',
  styleUrls: ['./board-history-sick.component.css'],
})
export class BoardHistorySickComponent implements OnInit {
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
    this.userService.getsakit().subscribe(
      async (data) => {
        this.content = data.data;
        await new Promise((f) => setTimeout(f, 1000));
        this.tableReady = true;
        console.log(this.content);
      },
      (error) => {
        this.content = JSON.parse(error.error).message;
      }
    );
  }
}
