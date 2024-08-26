import { useEffect, useState } from "react";

const BlogDetail = ({ params }) => {
  const [post, setPost] = useState({});


  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPost(data));
  // }, [params.id]);
  // const actualData = data.find((item) => item.id == params.id);
  return (
    <div>
      <h4 className="text-lg"></h4>
      <h2 className="text-2xl"></h2>
      <p>{actualData.content}</p>
    </div>
  );
};

export default BlogDetail;
