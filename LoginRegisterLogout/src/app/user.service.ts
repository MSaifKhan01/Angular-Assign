import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl='https://common-jsonserverforangular.onrender.com/data'
  constructor(private http:HttpClient) { }

  RegisterFun(user:User):Observable<User>{
    return this.http.post<User>(this.apiUrl,user)
  }
  LoginFun(email:string,password:string):Observable<User[]>{
    const url=`${this.apiUrl}?email=${email}&password=${password}`
    return this.http.get<User[]>(url)
  }
}