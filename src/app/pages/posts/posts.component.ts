import { Component, inject } from '@angular/core';
import { singlePost } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent {
  postService = inject(PostsService);

  postArr: singlePost[] = [];




  ngOnInit() {
    this.postArr = this.postService.getAll();
    console.log(this.postArr)
  }

}
