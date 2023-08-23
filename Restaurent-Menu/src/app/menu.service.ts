import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

import { Observable } from 'rxjs';
import { Menu } from './RestaurentMenu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiurl='https://www.themealdb.com/api/json/v1/1/categories.php'

  constructor(private http:HttpClient) { }
  GetData():Observable<{categories:Menu[]}>{
    return this.http.get<{categories:Menu[]}>(this.apiurl)
  }
  GetCartData(){
    let arr:any[]=JSON.parse(localStorage.getItem("cart")||"[]")
    return arr
  }
}
