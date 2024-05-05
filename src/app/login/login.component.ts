import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private userservice: UserService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        } );
    }

    // convenience getter for easy access to form fields
    get loginControl() { return this.loginForm.controls; }

    handleLogin(){

      console.log(this.loginForm.controls);
      const{ email,password } = this.loginForm.value;
      this.userservice.loginApi({
        email: email,
        password: password
      }).subscribe((res)=>console.log(res),
      (err)=>console.log(err)
    );
  }
}
