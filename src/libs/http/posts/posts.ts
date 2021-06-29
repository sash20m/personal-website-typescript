import { axios } from 'libs/http/axios';
import { Posts } from './posts.types';
import { Tweet } from './tweets.types';

export const posts = {
  getPosts: (): Promise<{ data: Posts[] }> => axios.get(`/posts`),
  getPost: (id: string): Promise<{ data: Posts }> => axios.get(`/posts/${id}`),

  getTweets: (id: string): Promise<{ data: { data: Tweet[] } }> =>
    axios.get(`/posts/tweets/${id}`),

  addPost: (data = {}): Promise<{ data: Posts }> => axios.post('/posts', data),
  editPost: (data = {}): Promise<{ data: Posts }> =>
    axios.patch('/posts', data),
};
