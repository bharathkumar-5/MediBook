import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <img src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <Link to={`/blog/${post.id}`}>Read More</Link>
    </div>
  );
};

export default BlogCard;