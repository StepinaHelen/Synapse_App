import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ResponseI } from '../../types/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{
  loginForm: FormGroup;
  message = ''
  destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  onSubmit(): void {
    this.message = ''
    const values = this.loginForm.value;
    this.authService.login({ "username": values.userName, "password": values.password }).subscribe((data:ResponseI )=> {
      if (data.success) {
        localStorage.setItem('userName', values.userName)
        this.router.navigateByUrl('/products')
      } else {
        this.message = data.message
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
