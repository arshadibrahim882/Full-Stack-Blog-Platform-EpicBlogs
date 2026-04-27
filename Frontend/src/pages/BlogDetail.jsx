import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";
import Loader from "../components/Loader";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    API.get(`/blogs/${id}`)
      .then(res => setBlog(res.data))
      .catch(() => setBlog(null));
  }, [id]);

  if (!blog) 
    return <Loader />;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{blog.title}</h1>

      <div
        className="prose dark:prose-invert mt-4"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}