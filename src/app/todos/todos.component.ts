import { Component, OnInit } from '@angular/core';
import { TodosService } from "app/todos.service";
import { UsersService } from "app/users.service";

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodosService, UsersService]
})
export class TodosComponent implements OnInit {
  
  todos: any[];
  users: any[];
  todosData: any[];
  userSelected: any[];


  constructor(private todosService: TodosService,
              private usersService: UsersService) { }

  getTodosByUser(id){
    this.todosService.getTodosByUser(id).subscribe(data => this.todosData = data);
    
    console.log(this.todosData)
  }

  ngOnInit() {
      this.usersService.getUsers().subscribe(data => this.users = data);
    

  }

}
