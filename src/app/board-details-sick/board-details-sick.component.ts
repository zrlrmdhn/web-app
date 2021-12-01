import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-board-details-sick',
  templateUrl: './board-details-sick.component.html',
  styleUrls: ['./board-details-sick.component.css'],
})
export class BoardDetailsSickComponent implements OnInit {
  content: any = [];
  message: '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getSick(this.route.snapshot.params.id);
  }

  getSick(id: any): void {
    this.userService.getsakitId(id).subscribe(
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
    this.userService.sakitStatus(id, { accept: status }).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title:
            status == 'accepted'
              ? 'Data izin sakit telah disetujui'
              : 'Data izin sakit telah ditolak',
          showConfirmButton: false,
          timer: 2000,
        });
        this.content.data.accept = status;
        this.getSick(id);
        console.log(response);
        this.message = response.message;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ada yang salah !',
          text: 'Formulir yang sudah disetujui tidak bisa diubah',
        });
        console.log(error);
      }
    );
  }
}
