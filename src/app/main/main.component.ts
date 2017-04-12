import { Component, OnInit } from '@angular/core';
import { PostsService } from "../posts.service";
import { Router } from '@angular/router';


@Component({
  selector: 'my-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ PostsService ]
})


export class MainComponent implements OnInit {

  posts: any[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
      this.postsService.getPosts().subscribe( (data) => this.posts = data);
  }

}
