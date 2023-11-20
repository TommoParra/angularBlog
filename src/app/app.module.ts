//Angular components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//External components
import { EditorModule } from 'primeng/editor'



//Apps components
import { PostCardComponent } from './components/post-card/post-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HeroComponent } from './components/hero/hero.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';

//Angular Material components
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { CategoryPostsComponent } from './pages/category-posts/category-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PostCardComponent,
    PostsComponent,
    HeaderComponent,
    HeroComponent,
    SinglePostComponent,
    NewPostComponent,
    CategoryPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    EditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
