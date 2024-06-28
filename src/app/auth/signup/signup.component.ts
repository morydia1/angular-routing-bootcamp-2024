import { Component } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from './../Validators/match-password';
import { UniqueUsername } from '../Validators/unique-username';
import { AuthService, SignupCredential } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private matchPassword:MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router){}

  signupForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ],[
      this.uniqueUsername.validate as AsyncValidatorFn
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  },
  { validators: [ this.matchPassword.validate] }
);

onSubmit(){
  if(this.signupForm.invalid)
    return

  this.authService.signup(this.signupForm.value as SignupCredential).subscribe({
    next: (response) =>{
      console.log(response)
      this.router.navigateByUrl('/');
    },
    error: (err) => {
      if(!err.status)
        this.signupForm.setErrors({ noConnexion: true})
      else
      this.signupForm.setErrors({ unknownErrors: true })
    },
  })
}

}
