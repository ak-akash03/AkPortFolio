import React from 'react';
import "./Blogs.css"

const Blogs = () => {
  const blogs = [
    {
      title: 'Blog Post 1',
      content: 'This is the content of blog post 1.'
    },
    {
      title: 'Blog Post 2',
      content: 'This is the content of blog post 2.'
    },
    // Add more blog posts here
  ];

  return (
    <div className="blog-section">
      <h2>Blog Articles</h2>
      {blogs.map((blog, index) => (
        <div key={index} className="blog-post">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;