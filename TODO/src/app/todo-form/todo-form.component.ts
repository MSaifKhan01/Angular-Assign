import { Component ,OnInit} from '@angular/core';

import { DataService } from '../data.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit{

  title:string=""
  content:string=""
    constructor(private todoService: DataService) { }
  ngOnInit(): void {}
  HandleSubmit(){
    let obj:Todo={
      title:this.title,
      content:this.content,
      completed:false
    }
    console.log("clicked",this.title,this.content)
    this.todoService.postTodos(obj).subscribe(()=>{
      this.title=""
      this.content=""
    })
  }
}
