import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const post = {
    id: 1,
    title: '5 Tips for a Healthy Heart',
    content: 'Here are 5 tips to keep your heart healthy...',
    image: 'https://tse1.mm.bing.net/th?id=OIP.1a2ofVr-orNHCw-lCArGOgHaI1&pid=Api&P=0&h=180',
  };

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;