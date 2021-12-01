import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-list-sick',
  templateUrl: './board-list-sick.component.html',
  styleUrls: ['./board-list-sick.component.css'],
})
export class BoardListSickComponent implements OnInit {
  content: any[] = [];
  tableReady = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getSakit();
  }

  getSakit(): void {
    this.userService.getsakit().subscribe(
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
