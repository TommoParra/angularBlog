import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { singlePost } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-category-posts',
  templateUrl: './category-posts.component.html',
  styleUrls: ['./category-posts.component.css']
})
export class CategoryPostsComponent {

  postsArr: singlePost[] = [];
  catTitle: string = '';

  selectedPost: singlePost | any;

  activatedRoute = inject(ActivatedRoute);
  postsService = inject(PostsService);

  formatCategoryString(category: string): string {
    return category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      const rawCategory = params.postCat;
      this.catTitle = this.formatCategoryString(rawCategory);
      const category = rawCategory;
      this.postsArr = this.postsService.getPostsByCategory(category);
    });
  }
}
