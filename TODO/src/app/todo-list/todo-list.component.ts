import { Component ,OnInit} from '@angular/core';
import { Todo } from '../todo.model';
import { DataService } from '../data.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  id:any=""
    titles:string=""

    todos:Todo[]=[]
    constructor(private todoService:DataService) {}
    ngOnInit(): void {
      this.fetchTodos()
    }
    fetchTodos():void{
      this.todoService.getTodos().subscribe((todo)=>{
        this.todos=todo
      })
    }
    Update(){
      console.log(this.id,this.titles)
      this.todoService.updateTodos(this.id,this.titles).subscribe(()=>{
        this.fetchTodos()
      })
    }

    Delete(id:any){
      this.todoService.deleteTodos(id).subscribe(()=>{
        this.fetchTodos()
      })
    }

}
