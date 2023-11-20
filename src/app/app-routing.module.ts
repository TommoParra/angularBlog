import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { CategoryPostsComponent } from './pages/category-posts/category-posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'new-post', component: NewPostComponent },
  {
    path: 'posts/:postID',
    component: SinglePostComponent,
  },
  {
    path: 'category/:postCat',
    component: CategoryPostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
