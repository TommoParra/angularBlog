import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'new-post', component: NewPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
