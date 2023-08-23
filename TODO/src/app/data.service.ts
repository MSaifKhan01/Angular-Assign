import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Todo } from './todo.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiurl='https://angular-jsonserver01.onrender.com/data'
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiurl)
  }

  postTodos(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.apiurl,todo)
  }

  updateTodos(id:number,title:any):Observable<any>{
    const url=`${this.apiurl}/${id}`
    let obj={title}
    return this.http.patch<Todo>(url,obj)
  }

  deleteTodos(id:number){
    const url=`${this.apiurl}/${id}`
    return this.http.delete(url)
  }


  
}
