import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { FormGroup } from '@angular/forms';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  currentUser: any;
  tokenStorageService: any;
  oldPassword: any;
  password: any;
  fullName: any;
  state1: boolean = false;
  state2: boolean = false;

  closeResult = '';

  constructor(
    private token: TokenStorageService,
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  changePassword(): void {
    this.userService.change(this.oldPassword, this.password).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Password anda telah diganti',
          showConfirmButton: false,
          timer: 2000,
        });
        console.log(response);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ada yang salah !',
          text: 'Coba periksa kembali',
        });
        console.log(error);
      }
    );
  }

  changeProfile(): void {
    this.userService.changepro(this.currentUser.fullName).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Profile anda telah diganti',
          showConfirmButton: false,
          timer: 2000,
        });
        this.token.getUser();
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  toggle1() {
    if (this.state1) {
      document.getElementById('oldPassword').setAttribute('type', 'password');
      document.getElementById('eye').style.color = 'black';
      this.state1 = false;
    } else {
      document.getElementById('oldPassword').setAttribute('type', 'text');
      document.getElementById('eye').style.color = 'yellow';
      this.state1 = true;
    }
  }

  toggle2() {
    if (this.state2) {
      document.getElementById('password').setAttribute('type', 'password');
      document.getElementById('eye2').style.color = 'black';

      this.state2 = false;
    } else {
      document.getElementById('password').setAttribute('type', 'text');
      document.getElementById('eye2').style.color = 'yellow';
      this.state2 = true;
    }
  }

  toggle3() {
    if (this.state2) {
      document.getElementById('againPass').setAttribute('type', 'password');
      document.getElementById('eye3').style.color = 'black';
      this.state2 = false;
    } else {
      document.getElementById('againPass').setAttribute('type', 'text');
      document.getElementById('eye3').style.color = 'yellow';
      this.state2 = true;
    }
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.changePassword();
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
