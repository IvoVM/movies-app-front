import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/types/user.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  errorMessage: any;
  public form!: FormGroup;
  snackbarDurationInSeconds = 5;
  public load!: boolean;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.load = true;
  }

  login() {
    this.load = false;
    this.errorMessage = null;
    const body: User = {
      username: this.form.value.username,
      password: this.form.value.password,
    };
    this.authenticationService.login(body).subscribe({
      next: (res: any) => {
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigateByUrl('');
      },
      error: (error: any) => {
        this.errorMessage = error.error.message;
        this.openSnackBar(`The username or password are incorrect`);
        this.load = true;
      },
    });
  }
  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'Cerrar', {
      duration: this.snackbarDurationInSeconds * 1000,
    });
  }
}
