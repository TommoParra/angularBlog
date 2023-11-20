import { Injectable } from '@angular/core';
import { singlePost } from '../interfaces/post.interface';
import { allPosts } from '../data/allposts.module';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private allPosts: singlePost[] = allPosts;

  private moveFeaturedToFirst(posts: singlePost[]): singlePost[] {
    const featuredPostIndex = posts.findIndex(post => post.featured === true);

    if (featuredPostIndex !== -1) {
      // Move the first post with featured=true to the beginning
      const featuredPost = posts.splice(featuredPostIndex, 1)[0];
      posts.unshift(featuredPost);
    }

    return posts;
  }


  private truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }


  getAll(): singlePost[] {
    const postsWithFeaturedMoved = this.moveFeaturedToFirst([...this.allPosts]);

    return postsWithFeaturedMoved.map(post => ({
      ...post,
      text: this.truncateText(post.text, post.featured ? 700 : 200)
    }));
  }

  getPostById(postID: number): singlePost | undefined {
    return this.allPosts.find(post => post.id === postID);
  }

  getPostsByCategory(category: string): singlePost[] {
    const filterByCat = this.allPosts.filter(post => post.category === category);
    return filterByCat.map(post => ({
      ...post,
      text: this.truncateText(post.text, post.featured ? 700 : 200)
    }));
  }

}
