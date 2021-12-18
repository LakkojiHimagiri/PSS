import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public signUp:any;
  public signupdatamodel:any;
  constructor(private fb:FormBuilder,private route: Router,private service:ServicesService) {
      this.signupdatamodel = new Signup();
   }

  ngOnInit(): void {
    this.signUp = this.fb.group({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('',[Validators.required])
  });
  }

  Registerbtn(){
    this.signupdatamodel.fname = this.signUp.get('fname').value;
    this.signupdatamodel.lname = this.signUp.get('lname').value;
    this.signupdatamodel.email = this.signUp.get('email').value;
    this.signupdatamodel.password = this.signUp.get('password').value;
    this.signupdatamodel.confirmPassword = this.signUp.get('confirmPassword').value; 
    this.service.Signupservice(this.signupdatamodel).subscribe((res:any)=>{
         console.log(res);
    });
  }

}

export class Signup{
   public fname:any;
   public lname:any;
   public email:any;
   public password:any;
   public confirmPassword:any;
}
