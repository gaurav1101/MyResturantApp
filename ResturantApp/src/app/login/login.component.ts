import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _loginform!: FormGroup;
  responsedata:any;

  constructor(private _builder: FormBuilder, private _http: HttpClient, private _route: Router,private _api:ApiService) { }

  ngOnInit(): void {
    localStorage.clear();
    this._loginform = this._builder.group({
      email: ['', [Validators.required]], 
        //Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
      password: ['', Validators.required ]
    })
   this.processLogin();
  }

  processLogin(){
    

    if(this._loginform.valid){
      this._api.login(this._loginform.value).subscribe(res=>{
        if(res!=null){
          this.responsedata=res;
          localStorage.setItem('token','true');
          this._route.navigate(['dashboard']);
        }
      });
    }
  }

  login1() {
    this._http.get<any>("http://localhost:3000/signup")
    .subscribe(res => {
    const user = res.find((a: any) => {
      return a.email === this._loginform.value.email && a.password === this._loginform.value.password
     })
     if (user) {
        alert("login successfull");
        this._loginform.reset();
       this._route.navigate(['dashboard'])
     } else {
       alert("login failed");
      }
  
     }, err => {
       alert("invalid user");
     }
      )
      
   }

 

}
