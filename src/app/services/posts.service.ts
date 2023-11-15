import { Injectable } from '@angular/core';
import { singlePost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private allPosts: singlePost[] = []

  constructor() {
    this.allPosts = [
      {
        title: 'Lorem Ipsum',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin dignissim ornare. Proin varius vestibulum rutrum. Quisque vitae orci tristique, placerat elit in, ullamcorper est. Etiam pulvinar consectetur orci vel mattis. Integer risus leo, dignissim sit amet orci non, vehicula ullamcorper erat. Nunc in mattis lorem, ut dictum nulla. 
        <br>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae nisi eu lorem molestie dapibus in vitae tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris non vulputate nunc, ac molestie metus. Duis urna risus, semper eget hendrerit sit amet, suscipit in mauris. Sed gravida porta lorem quis consectetur. Phasellus lobortis sit amet purus vitae placerat. Nam porta dui eu purus laoreet, non pharetra massa laoreet. Integer sed justo pulvinar erat dapibus aliquam. Donec augue felis, malesuada quis viverra non, porttitor in augue. Proin lacinia varius ultrices. Quisque eu tempor ligula, sed tristique nulla. 
        <br>
        Vivamus dapibus suscipit neque, sed luctus orci dapibus a. Aliquam dictum metus enim, at pharetra neque aliquam a. Curabitur egestas porttitor consectetur. Curabitur lacinia molestie turpis, molestie efficitur lectus malesuada sit amet. Vestibulum volutpat quam sed nibh ultrices sagittis. Suspendisse odio purus, sodales vitae ullamcorper maximus, vulputate eget arcu. Integer ac dapibus eros. Praesent aliquam faucibus enim at pulvinar. Nam imperdiet euismod facilisis. Donec faucibus pretium condimentum. Mauris pellentesque auctor diam molestie vulputate. Praesent laoreet tempor massa vitae sagittis. Pellentesque laoreet bibendum metus, nec tempor dolor ullamcorper ut. Ut non arcu efficitur, interdum mi id, congue quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed at euismod risus, id tristique purus. Sed tristique libero sed turpis dignissim venenatis. Nunc tincidunt dignissim elit sed elementum. Nunc vel aliquet tortor.
        <br>
        Vestibulum placerat neque non iaculis hendrerit. Nullam dictum gravida velit in facilisis. Donec ac sagittis purus. Praesent scelerisque purus in orci tristique consectetur et eget metus. Sed quis consectetur nulla, vel sollicitudin magna. Maecenas finibus non tellus et finibus. Maecenas facilisis tortor sed ex tincidunt pharetra. Donec aliquam gravida orci vitae lobortis. Aliquam risus magna, malesuada a lectus quis, fermentum commodo erat. Fusce sed erat sem. Nunc vehicula, dolor in mollis iaculis, lorem enim condimentum libero, et vestibulum risus tortor eget dolor.`,
        author: 'Legolas',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4piw-J1tjnAx4k4oQVGZ_0I_X13f7Fnx6nBKnQFSDA&s',
        date: new Date('2023-12-05'),
        category: 'string',
      },
      {
        title: 'Lorem Ipsum',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin dignissim ornare. Proin varius vestibulum rutrum. Quisque vitae orci tristique, placerat elit in, ullamcorper est. Etiam pulvinar consectetur orci vel mattis. Integer risus leo, dignissim sit amet orci non, vehicula ullamcorper erat. Nunc in mattis lorem, ut dictum nulla. 
        <br>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae nisi eu lorem molestie dapibus in vitae tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris non vulputate nunc, ac molestie metus. Duis urna risus, semper eget hendrerit sit amet, suscipit in mauris. Sed gravida porta lorem quis consectetur. Phasellus lobortis sit amet purus vitae placerat. Nam porta dui eu purus laoreet, non pharetra massa laoreet. Integer sed justo pulvinar erat dapibus aliquam. Donec augue felis, malesuada quis viverra non, porttitor in augue. Proin lacinia varius ultrices. Quisque eu tempor ligula, sed tristique nulla. 
        <br>
        Vivamus dapibus suscipit neque, sed luctus orci dapibus a. Aliquam dictum metus enim, at pharetra neque aliquam a. Curabitur egestas porttitor consectetur. Curabitur lacinia molestie turpis, molestie efficitur lectus malesuada sit amet. Vestibulum volutpat quam sed nibh ultrices sagittis. Suspendisse odio purus, sodales vitae ullamcorper maximus, vulputate eget arcu. Integer ac dapibus eros. Praesent aliquam faucibus enim at pulvinar. Nam imperdiet euismod facilisis. Donec faucibus pretium condimentum. Mauris pellentesque auctor diam molestie vulputate. Praesent laoreet tempor massa vitae sagittis. Pellentesque laoreet bibendum metus, nec tempor dolor ullamcorper ut. Ut non arcu efficitur, interdum mi id, congue quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed at euismod risus, id tristique purus. Sed tristique libero sed turpis dignissim venenatis. Nunc tincidunt dignissim elit sed elementum. Nunc vel aliquet tortor.
        <br>
        Vestibulum placerat neque non iaculis hendrerit. Nullam dictum gravida velit in facilisis. Donec ac sagittis purus. Praesent scelerisque purus in orci tristique consectetur et eget metus. Sed quis consectetur nulla, vel sollicitudin magna. Maecenas finibus non tellus et finibus. Maecenas facilisis tortor sed ex tincidunt pharetra. Donec aliquam gravida orci vitae lobortis. Aliquam risus magna, malesuada a lectus quis, fermentum commodo erat. Fusce sed erat sem. Nunc vehicula, dolor in mollis iaculis, lorem enim condimentum libero, et vestibulum risus tortor eget dolor.`,
        author: 'Legolas',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4piw-J1tjnAx4k4oQVGZ_0I_X13f7Fnx6nBKnQFSDA&s',
        date: new Date('2023-12-05'),
        category: 'string',
      },
      {
        title: 'Lorem Ipsum',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin dignissim ornare. Proin varius vestibulum rutrum. Quisque vitae orci tristique, placerat elit in, ullamcorper est. Etiam pulvinar consectetur orci vel mattis. Integer risus leo, dignissim sit amet orci non, vehicula ullamcorper erat. Nunc in mattis lorem, ut dictum nulla. 
        <br>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae nisi eu lorem molestie dapibus in vitae tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris non vulputate nunc, ac molestie metus. Duis urna risus, semper eget hendrerit sit amet, suscipit in mauris. Sed gravida porta lorem quis consectetur. Phasellus lobortis sit amet purus vitae placerat. Nam porta dui eu purus laoreet, non pharetra massa laoreet. Integer sed justo pulvinar erat dapibus aliquam. Donec augue felis, malesuada quis viverra non, porttitor in augue. Proin lacinia varius ultrices. Quisque eu tempor ligula, sed tristique nulla. 
        <br>
        Vivamus dapibus suscipit neque, sed luctus orci dapibus a. Aliquam dictum metus enim, at pharetra neque aliquam a. Curabitur egestas porttitor consectetur. Curabitur lacinia molestie turpis, molestie efficitur lectus malesuada sit amet. Vestibulum volutpat quam sed nibh ultrices sagittis. Suspendisse odio purus, sodales vitae ullamcorper maximus, vulputate eget arcu. Integer ac dapibus eros. Praesent aliquam faucibus enim at pulvinar. Nam imperdiet euismod facilisis. Donec faucibus pretium condimentum. Mauris pellentesque auctor diam molestie vulputate. Praesent laoreet tempor massa vitae sagittis. Pellentesque laoreet bibendum metus, nec tempor dolor ullamcorper ut. Ut non arcu efficitur, interdum mi id, congue quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed at euismod risus, id tristique purus. Sed tristique libero sed turpis dignissim venenatis. Nunc tincidunt dignissim elit sed elementum. Nunc vel aliquet tortor.
        <br>
        Vestibulum placerat neque non iaculis hendrerit. Nullam dictum gravida velit in facilisis. Donec ac sagittis purus. Praesent scelerisque purus in orci tristique consectetur et eget metus. Sed quis consectetur nulla, vel sollicitudin magna. Maecenas finibus non tellus et finibus. Maecenas facilisis tortor sed ex tincidunt pharetra. Donec aliquam gravida orci vitae lobortis. Aliquam risus magna, malesuada a lectus quis, fermentum commodo erat. Fusce sed erat sem. Nunc vehicula, dolor in mollis iaculis, lorem enim condimentum libero, et vestibulum risus tortor eget dolor.`,
        author: 'Legolas',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4piw-J1tjnAx4k4oQVGZ_0I_X13f7Fnx6nBKnQFSDA&s',
        date: new Date('2023-12-05'),
        category: 'string',
      },
      {
        title: 'Lorem Ipsum',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin dignissim ornare. Proin varius vestibulum rutrum. Quisque vitae orci tristique, placerat elit in, ullamcorper est. Etiam pulvinar consectetur orci vel mattis. Integer risus leo, dignissim sit amet orci non, vehicula ullamcorper erat. Nunc in mattis lorem, ut dictum nulla. 
        <br>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae nisi eu lorem molestie dapibus in vitae tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris non vulputate nunc, ac molestie metus. Duis urna risus, semper eget hendrerit sit amet, suscipit in mauris. Sed gravida porta lorem quis consectetur. Phasellus lobortis sit amet purus vitae placerat. Nam porta dui eu purus laoreet, non pharetra massa laoreet. Integer sed justo pulvinar erat dapibus aliquam. Donec augue felis, malesuada quis viverra non, porttitor in augue. Proin lacinia varius ultrices. Quisque eu tempor ligula, sed tristique nulla. 
        <br>
        Vivamus dapibus suscipit neque, sed luctus orci dapibus a. Aliquam dictum metus enim, at pharetra neque aliquam a. Curabitur egestas porttitor consectetur. Curabitur lacinia molestie turpis, molestie efficitur lectus malesuada sit amet. Vestibulum volutpat quam sed nibh ultrices sagittis. Suspendisse odio purus, sodales vitae ullamcorper maximus, vulputate eget arcu. Integer ac dapibus eros. Praesent aliquam faucibus enim at pulvinar. Nam imperdiet euismod facilisis. Donec faucibus pretium condimentum. Mauris pellentesque auctor diam molestie vulputate. Praesent laoreet tempor massa vitae sagittis. Pellentesque laoreet bibendum metus, nec tempor dolor ullamcorper ut. Ut non arcu efficitur, interdum mi id, congue quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed at euismod risus, id tristique purus. Sed tristique libero sed turpis dignissim venenatis. Nunc tincidunt dignissim elit sed elementum. Nunc vel aliquet tortor.
        <br>
        Vestibulum placerat neque non iaculis hendrerit. Nullam dictum gravida velit in facilisis. Donec ac sagittis purus. Praesent scelerisque purus in orci tristique consectetur et eget metus. Sed quis consectetur nulla, vel sollicitudin magna. Maecenas finibus non tellus et finibus. Maecenas facilisis tortor sed ex tincidunt pharetra. Donec aliquam gravida orci vitae lobortis. Aliquam risus magna, malesuada a lectus quis, fermentum commodo erat. Fusce sed erat sem. Nunc vehicula, dolor in mollis iaculis, lorem enim condimentum libero, et vestibulum risus tortor eget dolor.`,
        author: 'Legolas',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4piw-J1tjnAx4k4oQVGZ_0I_X13f7Fnx6nBKnQFSDA&s',
        date: new Date('2023-12-05'),
        category: 'string',
      },
      {
        title: 'Lorem Ipsum',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin dignissim ornare. Proin varius vestibulum rutrum. Quisque vitae orci tristique, placerat elit in, ullamcorper est. Etiam pulvinar consectetur orci vel mattis. Integer risus leo, dignissim sit amet orci non, vehicula ullamcorper erat. Nunc in mattis lorem, ut dictum nulla. 
        <br>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae nisi eu lorem molestie dapibus in vitae tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris non vulputate nunc, ac molestie metus. Duis urna risus, semper eget hendrerit sit amet, suscipit in mauris. Sed gravida porta lorem quis consectetur. Phasellus lobortis sit amet purus vitae placerat. Nam porta dui eu purus laoreet, non pharetra massa laoreet. Integer sed justo pulvinar erat dapibus aliquam. Donec augue felis, malesuada quis viverra non, porttitor in augue. Proin lacinia varius ultrices. Quisque eu tempor ligula, sed tristique nulla. 
        <br>
        Vivamus dapibus suscipit neque, sed luctus orci dapibus a. Aliquam dictum metus enim, at pharetra neque aliquam a. Curabitur egestas porttitor consectetur. Curabitur lacinia molestie turpis, molestie efficitur lectus malesuada sit amet. Vestibulum volutpat quam sed nibh ultrices sagittis. Suspendisse odio purus, sodales vitae ullamcorper maximus, vulputate eget arcu. Integer ac dapibus eros. Praesent aliquam faucibus enim at pulvinar. Nam imperdiet euismod facilisis. Donec faucibus pretium condimentum. Mauris pellentesque auctor diam molestie vulputate. Praesent laoreet tempor massa vitae sagittis. Pellentesque laoreet bibendum metus, nec tempor dolor ullamcorper ut. Ut non arcu efficitur, interdum mi id, congue quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed at euismod risus, id tristique purus. Sed tristique libero sed turpis dignissim venenatis. Nunc tincidunt dignissim elit sed elementum. Nunc vel aliquet tortor.
        <br>
        Vestibulum placerat neque non iaculis hendrerit. Nullam dictum gravida velit in facilisis. Donec ac sagittis purus. Praesent scelerisque purus in orci tristique consectetur et eget metus. Sed quis consectetur nulla, vel sollicitudin magna. Maecenas finibus non tellus et finibus. Maecenas facilisis tortor sed ex tincidunt pharetra. Donec aliquam gravida orci vitae lobortis. Aliquam risus magna, malesuada a lectus quis, fermentum commodo erat. Fusce sed erat sem. Nunc vehicula, dolor in mollis iaculis, lorem enim condimentum libero, et vestibulum risus tortor eget dolor.`,
        author: 'Legolas',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4piw-J1tjnAx4k4oQVGZ_0I_X13f7Fnx6nBKnQFSDA&s',
        date: new Date('2023-12-05'),
        category: 'string',
      },
      {
        title: 'Lorem Ipsum',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin dignissim ornare. Proin varius vestibulum rutrum. Quisque vitae orci tristique, placerat elit in, ullamcorper est. Etiam pulvinar consectetur orci vel mattis. Integer risus leo, dignissim sit amet orci non, vehicula ullamcorper erat. Nunc in mattis lorem, ut dictum nulla. 
        <br>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae nisi eu lorem molestie dapibus in vitae tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris non vulputate nunc, ac molestie metus. Duis urna risus, semper eget hendrerit sit amet, suscipit in mauris. Sed gravida porta lorem quis consectetur. Phasellus lobortis sit amet purus vitae placerat. Nam porta dui eu purus laoreet, non pharetra massa laoreet. Integer sed justo pulvinar erat dapibus aliquam. Donec augue felis, malesuada quis viverra non, porttitor in augue. Proin lacinia varius ultrices. Quisque eu tempor ligula, sed tristique nulla. 
        <br>
        Vivamus dapibus suscipit neque, sed luctus orci dapibus a. Aliquam dictum metus enim, at pharetra neque aliquam a. Curabitur egestas porttitor consectetur. Curabitur lacinia molestie turpis, molestie efficitur lectus malesuada sit amet. Vestibulum volutpat quam sed nibh ultrices sagittis. Suspendisse odio purus, sodales vitae ullamcorper maximus, vulputate eget arcu. Integer ac dapibus eros. Praesent aliquam faucibus enim at pulvinar. Nam imperdiet euismod facilisis. Donec faucibus pretium condimentum. Mauris pellentesque auctor diam molestie vulputate. Praesent laoreet tempor massa vitae sagittis. Pellentesque laoreet bibendum metus, nec tempor dolor ullamcorper ut. Ut non arcu efficitur, interdum mi id, congue quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed at euismod risus, id tristique purus. Sed tristique libero sed turpis dignissim venenatis. Nunc tincidunt dignissim elit sed elementum. Nunc vel aliquet tortor.
        <br>
        Vestibulum placerat neque non iaculis hendrerit. Nullam dictum gravida velit in facilisis. Donec ac sagittis purus. Praesent scelerisque purus in orci tristique consectetur et eget metus. Sed quis consectetur nulla, vel sollicitudin magna. Maecenas finibus non tellus et finibus. Maecenas facilisis tortor sed ex tincidunt pharetra. Donec aliquam gravida orci vitae lobortis. Aliquam risus magna, malesuada a lectus quis, fermentum commodo erat. Fusce sed erat sem. Nunc vehicula, dolor in mollis iaculis, lorem enim condimentum libero, et vestibulum risus tortor eget dolor.`,
        author: 'Legolas',
        image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Gimli.The-Lord-of-the-Rings-The-Fellowship-of-the-Ring.webp',
        date: new Date('2023-12-05'),
        category: 'string',
        featured: true,
      },
      {
        title: 'Lorem Ipsum',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin dignissim ornare. Proin varius vestibulum rutrum. Quisque vitae orci tristique, placerat elit in, ullamcorper est. Etiam pulvinar consectetur orci vel mattis. Integer risus leo, dignissim sit amet orci non, vehicula ullamcorper erat. Nunc in mattis lorem, ut dictum nulla. 
        <br>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae nisi eu lorem molestie dapibus in vitae tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris non vulputate nunc, ac molestie metus. Duis urna risus, semper eget hendrerit sit amet, suscipit in mauris. Sed gravida porta lorem quis consectetur. Phasellus lobortis sit amet purus vitae placerat. Nam porta dui eu purus laoreet, non pharetra massa laoreet. Integer sed justo pulvinar erat dapibus aliquam. Donec augue felis, malesuada quis viverra non, porttitor in augue. Proin lacinia varius ultrices. Quisque eu tempor ligula, sed tristique nulla. 
        <br>
        Vivamus dapibus suscipit neque, sed luctus orci dapibus a. Aliquam dictum metus enim, at pharetra neque aliquam a. Curabitur egestas porttitor consectetur. Curabitur lacinia molestie turpis, molestie efficitur lectus malesuada sit amet. Vestibulum volutpat quam sed nibh ultrices sagittis. Suspendisse odio purus, sodales vitae ullamcorper maximus, vulputate eget arcu. Integer ac dapibus eros. Praesent aliquam faucibus enim at pulvinar. Nam imperdiet euismod facilisis. Donec faucibus pretium condimentum. Mauris pellentesque auctor diam molestie vulputate. Praesent laoreet tempor massa vitae sagittis. Pellentesque laoreet bibendum metus, nec tempor dolor ullamcorper ut. Ut non arcu efficitur, interdum mi id, congue quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed at euismod risus, id tristique purus. Sed tristique libero sed turpis dignissim venenatis. Nunc tincidunt dignissim elit sed elementum. Nunc vel aliquet tortor.
        <br>
        Vestibulum placerat neque non iaculis hendrerit. Nullam dictum gravida velit in facilisis. Donec ac sagittis purus. Praesent scelerisque purus in orci tristique consectetur et eget metus. Sed quis consectetur nulla, vel sollicitudin magna. Maecenas finibus non tellus et finibus. Maecenas facilisis tortor sed ex tincidunt pharetra. Donec aliquam gravida orci vitae lobortis. Aliquam risus magna, malesuada a lectus quis, fermentum commodo erat. Fusce sed erat sem. Nunc vehicula, dolor in mollis iaculis, lorem enim condimentum libero, et vestibulum risus tortor eget dolor.`,
        author: 'Legolas',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4piw-J1tjnAx4k4oQVGZ_0I_X13f7Fnx6nBKnQFSDA&s',
        date: new Date('2023-12-05'),
        category: 'string',
      },
    ];

  }

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
      text: this.truncateText(post.text, post.featured ? 800 : 300)
    }));
  }
}
