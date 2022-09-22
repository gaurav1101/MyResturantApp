import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { dashboardModel } from './dashboardModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.css']
})
export class MydashboardComponent implements OnInit {

formValue!:FormGroup;
mymodel: dashboardModel=new dashboardModel();
alldata:any;
showAddButton!:boolean;
showEditButton!:boolean;

  constructor(private formbuilder:FormBuilder, private api:ApiService, private _router:Router) {  }

  ngOnInit(): void {
  
    this.formValue=this.formbuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      services:['']
    })
    this.getResturantdata();
  }

  AddAndEditButton(){
    this.showAddButton=true;
this.showEditButton=false;
  }

  addResturantData(){
    this.mymodel.Name=this.formValue.value.name;
    this.mymodel.email=this.formValue.value.email;
    this.mymodel.mobile=this.formValue.value.mobile;
    this.mymodel.address=this.formValue.value.address;
    this.mymodel.services=this.formValue.value.services;

    this.api.postResturantInfo(this.mymodel).subscribe(res=>{
      console.log(res);
      alert("record submitted successfully");
      this.formValue.reset();
      this.getResturantdata();
    },
    err=>{
      alert("OOPS something went wrong");
    })

  }

  getResturantdata(){
   
    this.api.getResturantData().subscribe(res=>{
      this.alldata =res;
    })
  }

  deleteResturantdata(data:any){
    this.api.deleteResturantData(data.id).subscribe(res=>{
    alert("Record deleted");
    this.getResturantdata();
    })


  }

  onEditbuttonclick(data:any){
    this.showAddButton=false;
    this.showEditButton=true;

   this.mymodel.id=data.id;
    this.formValue.controls['name'].setValue(data.Name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);

  }
  updateResturantData(){
    this.mymodel.Name=this.formValue.value.name;
    this.mymodel.email=this.formValue.value.email;
    this.mymodel.mobile=this.formValue.value.mobile;
    this.mymodel.address=this.formValue.value.address;
    this.mymodel.services=this.formValue.value.services;
    this.api.updateResturantData(this.mymodel.id,this.mymodel).subscribe(res=>{
    alert("rescord updated");
    this.getResturantdata();
 // }

  })
}

logout(){
  this._router.navigate(['login']);
}
}