'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
// import axios from 'axios';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">
      {posts.map((item, id) => {
        return (
          <div key={id} className="p-4 rounded-md border space-y-2 flex flex-col gap-2">
            {/* <h4 className="text-lg">{item.id}</h4> */}
            <h2 className="text-2xl h-full">{item.title}</h2>
            <Link
              href={`/blogs/${item.id}`}
              className="bg-orange-700 text-orange-200 px-4 py-2 rounded-sm w-fit"
            >
              Show Detail
            </Link>
          </div>  
        );
      })}
    </div>
  );
};

export default BlogPage;
