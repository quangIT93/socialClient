interface AuthState {
  isLoggedIn: boolean;
  username: string;
}

interface PostState {
  posts: Array<Post>;
}

interface RootState {
  auth: AuthState;
  post: PostState;
}

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

// Export the types
export type { AuthState, PostState, RootState, Post };
