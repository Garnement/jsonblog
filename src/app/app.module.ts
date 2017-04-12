import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    PostComponent,
    PostDetailComponent,
    AuthorDetailComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    HomeComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'posts', component: PostComponent},
      {path: 'post/:id', component: PostDetailComponent},
      {path: 'authors', component: AuthorsComponent},
      {path: 'authors/:id', component: AuthorDetailComponent },
      {path: 'albums', component: AlbumsComponent},
      {path: 'albums/:id', component: AlbumDetailComponent }
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
