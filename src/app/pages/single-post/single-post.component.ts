import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { singlePost } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {


  selectedPost: singlePost | any;

  activatedRoute = inject(ActivatedRoute);
  postsService = inject(PostsService);


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.selectedPost = this.postsService.getPostById(parseInt(params.postID));
    })
  }
}
