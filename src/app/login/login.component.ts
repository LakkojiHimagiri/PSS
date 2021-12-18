import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ServicesService} from '../services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login:any;
  loginmodeldata:any;
  loginserviceResponce:any
  constructor(private fb:FormBuilder,private route: Router,private service:ServicesService) {
     this.loginmodeldata = new loginModel();
   }

  ngOnInit(): void {
    this.Login = this.fb.group({
      email: new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }

  login():void{
    this.loginmodeldata.Email = this.Login.get('email').value;
    this.loginmodeldata.Password = this.Login.get('password').value;
    this.service.loginservice(this.loginmodeldata).subscribe((res:any)=>{
        console.log(res);
        this.loginserviceResponce = res.payload;
      });
  }
}

export class loginModel{
  Email:any;
  Password:any;
}
