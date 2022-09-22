import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  //posting the data
  postResturantInfo(data:any){
    return this._http.post("http://localhost:3000/posts",data);
  }

  getResturantData(){
    return this._http.get("http://localhost:3000/posts")
  }

  updateResturantData(id:number,data:any){
    return this._http.put("http://localhost:3000/posts/"+id,data)
  }

  deleteResturantData(id:number){
    return this._http.delete("http://localhost:3000/posts/"+id)
  }

  login(data:any){
    return this._http.get("http://localhost:3000/signup")
  }

  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  
}
