import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  usersUrl: string = "https://jsonplaceholder.typicode.com/users";

  authorUrl: string = "https://jsonplaceholder.typicode.com/users";

  postsUrl: string= "https://jsonplaceholder.typicode.com/users"
  
  constructor(public http: Http) { }

  getUsers() {
    return this.http.get(this.usersUrl).map( res => res.json() );
  }

  getAuthor(id) {
    return this.http.get(`${this.usersUrl}/${id}`).map(res => res.json() );
  }

  // Récupération des posts d'un auteur - https://jsonplaceholder.typicode.com/users/x/post/
  getPostsByAuthor(id) {
    return this.http.get(`${this.postsUrl}/${id}/posts`).map(res => res.json() )
    }

}
