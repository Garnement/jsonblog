import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


import { PostsService } from '../posts.service';
import { UsersService } from '../users.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http } from "@angular/http";

@Component({
  selector: 'author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
  providers: [PostsService, UsersService]
})
export class AuthorDetailComponent implements OnInit {

  id: Observable<number>;
  authorData: any[];
  authorPosts: any[];


  constructor(private postsService: PostsService,
              private location: Location,
              private route: ActivatedRoute,
              private http: Http,
              private usersService: UsersService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.usersService.getAuthor(this.id).subscribe( data => this.authorData = [data]);

    this.usersService.getPostsByAuthor(this.id).subscribe( data => this.authorPosts = data);


    
  }

}
