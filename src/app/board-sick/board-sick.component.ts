import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import Swal from 'sweetalert2';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-board-sick',
  templateUrl: './board-sick.component.html',
  styleUrls: ['./board-sick.component.css'],
})
export class BoardSickComponent implements OnInit {
  shortLink: string = '';
  file: File = null;
  submitted = false;
  currentUser: any;
  form: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private token: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      date: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
    this.currentUser = this.token.getUser();
  }

  onChange(event) {
    this.file = event.target.files[0];
  }

  saveSick() {
    let date = this.form.value.date;
    this.submitted = true;
    if (this.form.valid) {
      this.userService
        .upload(
          new Date(date.year, date.month - 1, date.day),
          this.form.value.description,
          this.file
        )
        .subscribe(
          (response) => {
            Swal.fire({
              icon: 'success',
              title: 'Data izin sakit anda telah disimpan',
              showConfirmButton: false,
              timer: 2000,
            });
            this.router.navigate(['/home'], { relativeTo: this.route });
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      for (let key in this.form.controls) {
        this.form.controls[key].markAsDirty();
        this.form.controls[key].updateValueAndValidity();
      }
    }
  }
}
