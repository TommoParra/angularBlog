import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { singlePost } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';



@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  text: string = 'Hello World!';

  postService = inject(PostsService);
  postArr: singlePost[] = [];
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl(),
      excerpt: new FormControl(),
      content: new FormControl(),
      image_url: new FormControl(),
      category: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.postArr = this.postService.getAll();
  }

  onSubmit() {
    const lastPostId = this.postArr.length > 0 ? this.postArr[this.postArr.length - 1].id : 0;
    const newPost: singlePost = {
      id: lastPostId + 1,
      ...this.form.value,
    };
    this.postArr.push(newPost);
    console.log(newPost);
  }


}
