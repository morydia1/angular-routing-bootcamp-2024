import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, SigninCredentials } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private authServie: AuthService,
    private router: Router
  ){}

  signinForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ])
  })

  onSubmit(control: FormGroup){
    if(this.signinForm.invalid)
      return;

    return this.authServie.signin(control.value).subscribe({
      next: () => {
        return this.router.navigateByUrl('/inbox');
      },
      error: ({error}) => {
          if(error.username || error.password)
            this.signinForm.setErrors({ credentials: true });
      }
    })
  }
}
