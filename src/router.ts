import { AboutPage } from 'pages/AboutPage/AboutPage';
import { AddBlogPostPage } from 'pages/AddBlogPostPage/AddBlogPostPage';
import { BlogPage } from 'pages/BlogPage/BlogPage';
import { BlogPostPage } from 'pages/BlogPostPage/BlogPostPage';
import { ContactPage } from 'pages/ContactPage/ContactPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';

export const routes = {
  allRoutes: [
    { path: '/about', exact: true, component: AboutPage },
    { path: '/blog', exact: true, component: BlogPage },
    { path: '/blog/add', exact: true, component: AddBlogPostPage },
    { path: '/blog/:id', exact: true, component: BlogPostPage },
    { path: '/blog/edit/:id', exact: true, component: AddBlogPostPage },
    { path: '/contact', exact: true, component: ContactPage },
    { path: '/login', exact: true, component: LoginPage },
  ],
  defaultRoute: {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
};
