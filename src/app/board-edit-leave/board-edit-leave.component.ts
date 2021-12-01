import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Moment } from 'moment';
import Swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
  selector: 'app-board-edit-leave',
  templateUrl: './board-edit-leave.component.html',
  styleUrls: ['./board-edit-leave.component.css'],
})
export class BoardEditLeaveComponent implements OnInit {
  selected: { start: Moment; end: Moment };
  form: FormGroup;
  content: any;
  id: any;
  submitted = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getHistory(this.id);
  }

  initForm(): void {
    console.log(this.content);
    let date = new Date(this.content.date);
    this.form = this.formBuilder.group({
      date: [
        {
          year: date.getFullYear(),
          month: date.getMonth(),
          day: date.getDate(),
        },
      ],
      position: '',
      necessity: '',
    });

    this.selected = {
      start: moment(this.content.startDate),
      end: moment(this.content.endDate),
    };
    this.form.controls['position'].setValue(this.content.position);
    this.form.controls['necessity'].setValue(this.content.necessity);
  }

  updateHistory(id: any): void {
    let date = this.form.value.date;
    const data = {
      position: this.form.value.position,
      necessity: this.form.value.necessity,
      startDate: new Date(date.start),
      endDate: new Date(new Date(date.end).setHours(0, 0, 0, 0)),
    };
    this.submitted = true;
    this.userService.updatecuti(id, data).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Data cuti anda telah diedit',
          showConfirmButton: false,
          timer: 2000,
        });
        this.router.navigate(['/history/cuti'], { relativeTo: this.route });
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
  }

  getHistory(id): void {
    this.userService.getcutiId(id).subscribe(
      (data) => {
        this.content = data.data[0];
        console.log(this.content);
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.initForm();
      }
    );
  }
}
