import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-board-details-leave',
  templateUrl: './board-details-leave.component.html',
  styleUrls: ['./board-details-leave.component.css'],
})
export class BoardDetailsLeaveComponent implements OnInit {
  content: any = [];
  message: '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getLeave(this.route.snapshot.params.id);
  }

  getLeave(id: any): void {
    this.userService.getcutiId(id).subscribe(
      (data) => {
        this.content = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateApproval(status: string, id: any): void {
    console.log(status, id);
    this.userService.cutiStatus(id, { approval: status }).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title:
            status == 'approved'
              ? 'Data cuti telah disetujui'
              : 'Data cuti telah ditolak',
          showConfirmButton: false,
          timer: 2000,
        });
        this.content.data.approval = status;
        this.getLeave(id);
        console.log(response);
        this.message = response.message;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ada yang salah !',
          text: 'Formulir yang sudah disetujui atau ditolak tidak bisa diubah',
        });
        console.log(error);
      }
    );
  }
}
