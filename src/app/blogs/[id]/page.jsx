'use client'

import { useEffect, useState } from "react";

const BlogDetail = ({ params }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPost(data)});
  }, [params.id]);
  // const actualData = data.find((item) => item.id == params.id);
  return (
    <div className="mx-5">
      <h4 className="text-lg">{post.id}</h4>
      <h2 className="text-2xl">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogDetail;
