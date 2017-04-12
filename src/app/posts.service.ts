import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public http: Http) { }
  
  //récupération des posts
  getPosts() {
    return this.http.get(this.postsUrl).map( res => res.json() );
  }

  //récupération d'un post
  getPost(id) {

    const post = `${this.postsUrl}/${id}`;

    return this.http.get(post).map(res => res.json());
  }

  //récupération des commentaires par post
  getComments(id) {
    
    const comments = `${this.postsUrl}/${id}/comments`;

    return this.http.get(comments).map(res => res.json());
  }

}
