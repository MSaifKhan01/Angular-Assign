// post.model.ts
export interface Post {
    id: number;
    username: string;
    caption: string;
    likes: number;
    comments: Comment[];
  }
  
  // comment.model.ts
  export interface Comment {
    id: number;
    username: string;
    text: string;
  }
  
  // like.model.ts
  export interface Like {
    postId: number;
    username: string;
  }
  