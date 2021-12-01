import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
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
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css'],
})
export class BoardEditComponent implements OnInit {
  form: FormGroup;
  reasons: FormArray;
  content: any;
  managers: any[];
  id: any;
  submitted = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userService.getManager().subscribe(
      (data) => {
        this.managers = data;
        this.getHistory(this.id);
      },
      (err) => {
        this.managers = [];
      }
    );
  }

  initForm(): void {
    console.log(this.content);
    let time = new Date(this.content.time);
    let startTime = new Date(this.content.startTime);
    let endTime = new Date(this.content.endTime);
    this.form = this.formBuilder.group({
      time: [
        {
          year: time.getFullYear(),
          month: time.getMonth() + 1,
          day: time.getDate(),
        },
        [Validators.required],
      ],

      startTime: [
        { hour: startTime.getHours(), minute: startTime.getMinutes() },
        [Validators.required],
      ],

      endTime: [
        { hour: endTime.getHours(), minute: endTime.getMinutes() },
        [Validators.required],
      ],

      assigner: [
        this.managers.find((manager) => {
          return manager.fullName == this.content.assigner;
        }).id,
        [Validators.required],
      ],

      reasons: this.formBuilder.array([]),
    });
    for (let reason of this.content.reasons) {
      this.addReason(reason);
    }
  }

  updateHistory(id: any): void {
    console.log(this.form.value);
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
      this.userService.updateOvertime(id, data).subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Data lembur anda telah diedit',
            showConfirmButton: false,
            timer: 2000,
          });
          this.router.navigate(['/history/lembur'], { relativeTo: this.route });
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

  getHistory(id): void {
    this.userService.get(id).subscribe(
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

  addReason(value?) {
    this.reasons = this.form.get('reasons') as FormArray;
    this.reasons.push(this.formBuilder.control(value ?? ''));
  }

  deleteReason(reasonsIndex: number) {
    this.reasons.removeAt(reasonsIndex);
  }
}
