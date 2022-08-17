import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { CustomValidators } from 'src/app/shared/validators/custom-validators';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isSubmiting$: Observable<boolean>
  message = ''

  passwordSubscription: Subscription;
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.initializeForm()
    this.passwordSubscription = this.registerForm.controls.password.valueChanges.subscribe(() => {
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    });
  }

  initializeForm(): void {
    this.registerForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", [Validators.required, CustomValidators.compareWith('password')]],
      confirmTerms: [false, Validators.requiredTrue]
    })
  }



  onSubmit() {
    this.message = ''
    const values = this.registerForm.value;
    this.authService.register({ "username": values.userName, "password": values.password }).subscribe(data => {
      if (data.success) {
        this.router.navigateByUrl('/login')
      }
      else {
        this.message = data.message
      }
    })
  }
}
