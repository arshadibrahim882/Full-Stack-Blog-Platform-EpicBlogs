import { motion } from "framer-motion";
import API from "../api/api";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog, refresh }) {
    const [comment, setComment] = useState("");
    const { user } = useAuth();
    const navigate = useNavigate();

    //LIKE.
    const like = async () => {
        try {
            await API.put(`/blogs/like/${blog._id}`);
            refresh && refresh();
        } catch {
            toast.error("Login required");
        }
    };

    //COMMENT.
    const addComment = async () => {
        if (!comment)
            return;

        try {
            await API.post(`/blogs/comment/${blog._id}`, { text: comment });
            setComment("");
            refresh && refresh();
        } catch {
            toast.error("Login required");
        }
    };

    //DELETE.
    const deleteBlog = async () => {
        try {
            if (!window.confirm("Are you sure you want to delete this blog?"))
                return;

            await API.delete(`/blogs/${blog._id}`);
            toast.success("Blog deleted");
            refresh && refresh();

        } catch (err) {
            if (err.response?.status === 403) {
                toast.error("You can only delete your own blog ❌");
            } else {
                toast.error("Something went wrong");
            }
        }
    };

    //EDIT.
    const editBlog = () => {
        navigate(`/edit/${blog._id}`);
    };

    return (
        <motion.div className="glass p-5 space-y-3" whileHover={{ scale: 1.02 }}>

            <div
                className="flex items-center gap-3 mb-2 cursor-pointer"
                onClick={() => navigate(`/author/${blog.user._id}`)}
            >
                <img
                    src={blog.user?.avatar || "https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png"}
                    className="w-10 h-10 rounded-full"
                />
                <p
                    className="text-sm cursor-pointer"
                    onClick={() => navigate(`/author/${blog.user._id}`)}
                >
                    ✍️ {
                        blog.user?.name?.trim()
                            ? blog.user.name
                            : blog.user?.email?.split("@")[0] || "Anonymous"
                    }
                </p>
            </div>

            {/*TITLE*/}
            <h2
                className="text-xl font-bold cursor-pointer"
                onClick={() => navigate(`/blog/${blog._id}`)}
            >
                {blog.title}
            </h2>

            <p className="text-xs opacity-60">
                📂 {blog.category}
            </p>

            <div className="flex flex-wrap gap-2">
                {blog.tags?.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                        #{tag}
                    </span>
                ))}
            </div>

            {/*CONTENT*/}
            <div
                className="prose dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/*IMAGE*/}
            {blog.image && (
                <img src={blog.image} className="rounded-xl mt-2" />
            )}

            {/*LIKE*/}
            <button className="btn text-sm" onClick={like}>
                ❤️ {blog.likes?.length || 0}
            </button>

            {/*ONLY OWNER CAN SEE*/}
            {user && (blog.user?._id === user._id || blog.author === user._id) && (
                <div className="flex gap-3">
                    <button
                        className="btn text-sm bg-blue-500 text-white"
                        onClick={editBlog}
                    >
                        ✏️ Edit
                    </button>

                    <button
                        className="btn text-sm bg-red-500 text-white"
                        onClick={deleteBlog}
                    >
                        🗑 Delete
                    </button>
                </div>
            )}

            {/*COMMENTS*/}
            <div className="mt-3">
                {blog.comments?.map((c, i) => (
                    <p key={i} className="text-sm opacity-80">
                        💬 {c.text}
                    </p>
                ))}

                <input
                    className="input mt-2"
                    placeholder="Add comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />

                <button className="btn mt-2" onClick={addComment}>
                    Post
                </button>
            </div>
        </motion.div>
    );
}