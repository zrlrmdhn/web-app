import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css'],
})
export class BoardDetailComponent implements OnInit {
  content: any = [];
  message: '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getOvertime(this.route.snapshot.params.id);
  }

  getOvertime(id: any): void {
    this.userService.get(id).subscribe(
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
    this.userService.updateStatus(id, { approval: status }).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title:
            status == 'approved'
              ? 'Data lembur telah disetujui'
              : 'Data lembur telah ditolak',
          showConfirmButton: false,
          timer: 2000,
        });
        this.content.data.approval = status;
        this.getOvertime(id);
        console.log(response);
        this.message = response.message;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ada yang salah !',
          text: 'Formulir yang sudah disetujui atau ditolak tidak bisa diubah atau hanya pemberi tugas yang bisa',
        });
        console.log(error);
      }
    );
  }
}
