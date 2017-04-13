import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostsService]
})
export class PostDetailComponent implements OnInit {
    
   postDatas: any = {};
   commentsPost: any[];
   id: Observable<number>;

  constructor(private postsService: PostsService,
              private location: Location,
              private route: ActivatedRoute ) { }

  getPost(id) {
    this.postsService.getPost(id)

  }

  
  ngOnInit() {
    //récupération de l'id via l'URL
    this.id = this.route.snapshot.params['id'];

    //this.postsService.getPost(this.id).map( response  => response.json() ).subscribe( data => this.postDatas = data);

    //this.postsService.getPost(this.id).subscribe( (data) => this.postDatas = data );

    this.postsService.getPost(this.id).subscribe( (data) => this.postDatas = data );

    this.postsService.getComments(this.id).subscribe( (data) => this.commentsPost = data );
  }

}
