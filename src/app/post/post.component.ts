import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostsService } from '../posts.service';



@Component({
  selector: 'my-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostsService]
})
export class PostComponent implements OnInit {

  posts: any[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe( (data) => this.posts = data);
  }

}
