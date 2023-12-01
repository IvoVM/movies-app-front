import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide = true;
  public form!: FormGroup;
  public load = false;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}
  public register() {
    this.load = true;
    const body = {
      username: this.form.value.user,
      password: this.form.value.password,
    };
    console.log(body);

    this.authenticationService.register(body).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigateByUrl('');
        this.load = false;
      },
      error: (error) => {
        this.openSnackBar('Username already taken');
        this.load = false;
        console.log('register error', error);
      },
    });
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'Cerrar', {
      duration: 4000,
    });
  }
}
