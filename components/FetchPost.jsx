"use client";

import React, { useEffect, useState } from "react";
import "../components/post.css";

const FetchPost = () => {
  const [posts, setPosts] = useState([]);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.substring(0, maxLength)}...read more`;
    }
    return description;
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);
  return (
    <>
      <h1 className='heading'>Shop Amazing Products</h1>
      <div className='container'>
        {posts?.map((post) => (
          <>
            <div key={post.id} className='card'>
              <img src={post.image} alt='' className='card-image' />
              <div className='card-description'>
                <h1 className='card-heading'>{post?.title}</h1>
                <p className='card-desc'>
                  {" "}
                  {truncateDescription(post?.description, 150)}
                </p>
                <h2 className='category'>
                  Category: <span>{post?.category}</span>
                </h2>
                <h3 className='price'>
                  Price: <span>$ {post?.price}</span>
                </h3>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default FetchPost;
