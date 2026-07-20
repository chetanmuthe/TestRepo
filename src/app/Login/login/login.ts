import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './Service/login-service';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, NgModel, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  UserName:any="";
  PassWord:any="";
  LoginForm!: UntypedFormGroup;
   constructor(private router: Router,
    private _loginApi:LoginService,
    private formBuilder: UntypedFormBuilder,
   ) {
  }
    setForm() {
    this.LoginForm = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]]
    });
  }
  ngOnInit(){
    this.setForm();
  }
  onLogin() {
    debugger;
    // ✅ Here you could add actual login logic later
    this._loginApi.loginUser(this.LoginForm.value.Username,this.LoginForm.value.Password).subscribe((data:any)=>{
      debugger;
      if(data.Result){
        debugger;
        alert("Login successful!.");
        this.router.navigate(['/dashboard']); // Redirect to Dashboard
      }
      else{
        alert("Invalid User.");
        this.LoginForm.reset();
      }
    });
  }
}
