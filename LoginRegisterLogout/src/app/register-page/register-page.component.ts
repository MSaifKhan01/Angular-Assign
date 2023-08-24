import { Component,OnInit} from '@angular/core';
// import { User } from '../user.model';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{

 name:string=""
  email:string=""
  password:string=""
  ngOnInit(): void {
    
  }
  constructor(private userService:UserService,private router:Router){}
  RegisterSubmit(){
    let obj:User={
      name:this.name,
      email:this.email,
      password:this.password
    }
    console.log(obj)
    this.userService.RegisterFun(obj).subscribe(()=>{
      alert('Registration succesful')
      this.router.navigate(['/login'])
    })
  }
}