import { Component,OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  email:string=""
  password:string=""
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(): void {
    
  }
  LoginSubmit(){
    this.userService.LoginFun(this.email,this.password).subscribe((data)=>{
      if(data.length>0){
        alert("Login succesful")
        localStorage.setItem("token","abcd1234")
        this.router.navigate(['/'])
      }else{
        alert("Login failed")
      }
    })
  }
}

