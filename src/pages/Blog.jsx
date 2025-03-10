import React from 'react';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '5 Tips for a Healthy Heart',
      excerpt: 'Learn how to keep your heart healthy with these simple tips.',
      image: 'https://tse3.mm.bing.net/th?id=OIP.ySRRtBYJTrTsIX0tGHmr4wHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 2,
      title: 'Understanding Diabetes',
      excerpt: 'A comprehensive guide to understanding diabetes.',
      image: 'https://tse1.mm.bing.net/th?id=OIP.1a2ofVr-orNHCw-lCArGOgHaI1&pid=Api&P=0&h=180',
    },
  ];

  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog-list">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;