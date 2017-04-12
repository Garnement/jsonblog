import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodosService {

  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosUser: string = 'https://jsonplaceholder.typicode.com/users'

  constructor(public http: Http) { }
  
  //récupération des todos
  getTodos() {
    return this.http.get(this.todosUrl).map( res => res.json() );
  }

  //récupération des todos par user
  getTodosByUser(id){
    return this.http.get(`${this.todosUser}/${id}/todos`).map( res => res.json() );
  }
}
