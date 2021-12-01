import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css'],
})
export class BoardManagementComponent implements OnInit {
  content: any[] = [];
  tableReady = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getLembur();
  }

  getLembur(): void {
    this.userService.getAll().subscribe(
      async (data) => {
        this.content = data;
        await new Promise((f) => setTimeout(f, 1000));
        this.tableReady = true;
        console.log(data);
      },
      (err) => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
