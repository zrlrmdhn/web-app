import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { Moment } from 'moment';
import Swal from 'sweetalert2';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-board-leave',
  templateUrl: './board-leave.component.html',
  styleUrls: ['./board-leave.component.css'],
})
export class BoardLeaveComponent implements OnInit {
  selected: { start: Moment; end: Moment };
  form: FormGroup;
  currentUser: any;
  submitted = false;

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
      position: ['', [Validators.required]],
      necessity: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
    this.currentUser = this.token.getUser();
  }

  saveLeave(): void {
    let date = this.form.value.date;
    const data = {
      position: this.form.value.position,
      necessity: this.form.value.necessity,
      startDate: new Date(date.start),
      endDate: new Date(new Date(date.end).setHours(0, 0, 0, 0)),
    };
    this.submitted = true;
    if (this.form.valid) {
      this.userService.createcuti(data).subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Data cuti anda telah disimpan',
            showConfirmButton: false,
            timer: 2000,
          });
          this.router.navigate(['/home'], { relativeTo: this.route });
          console.log(response);
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Ada yang salah !',
            text: 'Sisa cuti anda telah habis',
          });
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
