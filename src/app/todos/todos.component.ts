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


  constructor(private todosService: TodosService,
              private userService: UsersService) { }

  ngOnInit() {

    

  }

}
