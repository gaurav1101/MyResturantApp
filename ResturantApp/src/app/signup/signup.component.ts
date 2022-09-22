import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private _httpclient: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      password: ['']
    })
  }

  submitsignupdata() {
    this._httpclient.post("http://localhost:3000/signup", this.signupForm.value).subscribe(res => {
      console.log(res);
      alert("You have signedup Successfully");
      this.signupForm.reset();
      this.route.navigate(['login']);
    }, err => {
      alert("OOPs! Something went wrong")
    })
  }

}
