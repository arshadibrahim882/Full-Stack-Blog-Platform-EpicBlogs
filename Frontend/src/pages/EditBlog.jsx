import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/api";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

export default function EditBlog() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        title: "",
        image: null,
    });

    const { quill, quillRef } = useQuill();

    //FETCH BLOG.
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await API.get(`/blogs/${id}`);

                setData({
                    title: res.data.title,
                    image: null,
                });

                //wait until quill is ready.
                setTimeout(() => {
                    if (quill) {
                        quill.root.innerHTML = res.data.content;
                    }
                }, 300);

            } catch (err) {
                toast.error(err.response?.data?.msg || "Blog not found");
                navigate("/");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id, quill]);

    //UPDATE BLOG.
    const updateBlog = async () => {
        try {
            if (!quill) 
                return;

            const form = new FormData();
            form.append("title", data.title);
            form.append("content", quill.root.innerHTML);

            if (data.image) {
                form.append("image", data.image);
            }

            await API.put(`/blogs/${id}`, form);

            toast.success("Blog updated!");
            navigate(`/blog/${id}`);

        } catch (err) {
            toast.error(err.response?.data?.msg || "Update failed");
        }
    };

    if (loading) 
        return <Loader />;

    return (
        <div className="flex justify-center mt-10">
            <div className="glass w-[700px] p-6 flex flex-col gap-4">

                <h2 className="text-2xl font-bold text-center">
                    Edit Blog ✏️
                </h2>

                {/*TITLE*/}
                <input
                    className="input"
                    value={data.title}
                    onChange={(e) =>
                        setData({ ...data, title: e.target.value })
                    }
                />

                {/*EDITOR*/}
                <div
                    ref={quillRef}
                    className="bg-white dark:bg-gray-900 rounded-xl"
                />

                {/*IMAGE*/}
                <input
                    type="file"
                    className="input"
                    onChange={(e) =>
                        setData({ ...data, image: e.target.files[0] })
                    }
                />

                <button className="btn" onClick={updateBlog}>
                    Update Blog
                </button>
            </div>
        </div>
    );
}