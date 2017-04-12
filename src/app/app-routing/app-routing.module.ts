import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { PostComponent } from '../post/post.component';

const routes: Routes = [

  // { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'post', component: PostComponent }

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
