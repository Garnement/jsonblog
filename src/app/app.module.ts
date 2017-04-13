import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';
import { RouterModule }           from '@angular/router';

import {Ng2PaginationModule }     from  'ng2-pagination';

import { AppComponent }           from './app.component';
import { PostComponent }          from './post/post.component';

import { AppRoutingModule }       from './app-routing/app-routing.module';
import { PostDetailComponent }    from './post-detail/post-detail.component';
import { AuthorDetailComponent }  from './author-detail/author-detail.component';
import { AlbumsComponent }        from './albums/albums.component';
import { AlbumDetailComponent }   from './album-detail/album-detail.component';
import { HomeComponent }          from './home/home.component';
import { AuthorsComponent }       from './authors/authors.component';
import { TodosComponent }         from './todos/todos.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDetailComponent,
    AuthorDetailComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    HomeComponent,
    AuthorsComponent,
    TodosComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'posts',       component: PostComponent},
      {path: 'post/:id',    component: PostDetailComponent},
      {path: 'authors',     component: AuthorsComponent},
      {path: 'authors/:id', component: AuthorDetailComponent },
      {path: 'albums',      component: AlbumsComponent},
      {path: 'albums/:id',  component: AlbumDetailComponent },
      {path: 'todos',       component: TodosComponent }
    ]),
    AppRoutingModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
