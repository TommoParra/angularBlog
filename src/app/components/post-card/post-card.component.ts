import { Component, Input, inject } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { singlePost } from 'src/app/interfaces/post.interface';
//Angular Material Card
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() post!: singlePost;

  postsService = inject(PostsService);



}
