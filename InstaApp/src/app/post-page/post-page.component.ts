import { Component } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent {
  username = '';
  caption = '';
  posts: Post[] = [];

  createPost(): void {
    const newPost: Post = {
      id: this.posts.length + 1,
      username: this.username,
      caption: this.caption,
      likes: 0,
      comments: [],
    };

    // Add the new post to the posts array
    this.posts.push(newPost);

    this.username = '';
    this.caption = '';
  }
}
