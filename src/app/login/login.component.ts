import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  fullName: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      if (this.isLoggedIn)
        this.router.navigate(['/home'], { relativeTo: this.route });
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      (data) => {
        console.log(data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        Swal.fire({
          icon: 'success',
          title: 'Anda berhasil login',
          showConfirmButton: false,
          timer: 1500,
        });

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Gagal !',
          text: 'Email atau Password salah',
        });
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
      () => {
        this.reloadPage();
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
