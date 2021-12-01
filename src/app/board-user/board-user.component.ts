import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'],
})
export class BoardStaffComponent implements OnInit {
  form: FormGroup;
  reasons: FormArray;
  managers: any[];
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
      time: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      assigner: ['', [Validators.required]],
      reasons: this.formBuilder.array([]),
    });

    this.userService.getManager().subscribe(
      (data) => {
        this.managers = data;
      },
      (err) => {
        this.managers = [];
      }
    );
    this.currentUser = this.token.getUser();
  }

  saveOvertime(): void {
    let time = this.form.value.time;
    let start = this.form.value.startTime;
    let end = this.form.value.endTime;
    const data = {
      time: new Date(time.year, time.month - 1, time.day),
      startTime: new Date(
        time.year,
        time.month - 1,
        time.day,
        start.hour,
        start.minute
      ),
      endTime: new Date(
        time.year,
        time.month - 1,
        time.day,
        end.hour,
        end.minute
      ),
      assigner: this.form.value.assigner,
      reasons: this.form.value.reasons,
    };
    this.submitted = true;
    if (this.form.valid && this.form.value.reasons.length > 0) {
      this.userService.create(data).subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Data lembur anda telah disimpan',
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

  addReason() {
    this.reasons = this.form.get('reasons') as FormArray;
    this.reasons.push(this.formBuilder.control(''));
  }

  deleteReason(reasonsIndex: number) {
    this.reasons.removeAt(reasonsIndex);
  }
}
