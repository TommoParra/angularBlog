import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeroComponent } from './components/hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//Angular material design components

@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    FooterComponent,
    PostCardComponent,
    PostsComponent,
    HeaderComponent,
    HeroComponent,
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
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
