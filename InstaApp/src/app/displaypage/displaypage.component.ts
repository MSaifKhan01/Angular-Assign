import { Component, Input } from '@angular/core';
import { Post, Comment } from '../post.model'; // Import the necessary models

@Component({
  selector: 'app-displaypage',
  templateUrl: './displaypage.component.html',
  styleUrls: ['./displaypage.component.css']
})
export class DisplaypageComponent {
  @Input() posts: Post[] = [];

  likePost(post: Post): void {
    // Implement your like logic here
  }

  addComment(post: Post, commentText: string): void {
    // Implement your add comment logic here
  }
}
