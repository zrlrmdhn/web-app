import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-board-edit-sick',
  templateUrl: './board-edit-sick.component.html',
  styleUrls: ['./board-edit-sick.component.css'],
})
export class BoardEditSickComponent implements OnInit {
  form: FormGroup;
  content: any;
  id: any;
  submitted = false;
  file: File = null;
  fileString: any;

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
    this.getHistory(this.id);
  }

  initForm(): void {
    console.log(this.content);
    let date = new Date(this.content.date);
    this.form = this.formBuilder.group({
      date: [
        {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate(),
        },
        [Validators.required],
      ],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
    this.form.controls['description'].setValue(this.content.description);
  }

  onChange(event) {
    this.file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.fileString = reader.result;
      console.log(this.fileString);
    };
  }

  updateHistory(id): void {
    let date = this.form.value.date;
    this.submitted = true;
    if (this.form.valid) {
      this.userService
        .updatesakit(
          id,
          new Date(date.year, date.month - 1, date.day),
          this.form.value.description,
          this.file
        )
        .subscribe(
          (response) => {
            Swal.fire({
              icon: 'success',
              title: 'Data izin sakit anda telah diedit',
              showConfirmButton: false,
              timer: 2000,
            });
            this.router.navigate(['/history/sakit'], {
              relativeTo: this.route,
            });
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
    this.userService.getsakitId(id).subscribe(
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
