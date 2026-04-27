import { useState, useEffect } from "react";
import API from "../api/api";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
    const [data, setData] = useState({
        title: "",
        image: null,
    });

    const { quill, quillRef } = useQuill();

    const navigate = useNavigate();

    const submit = async () => {
        try {
            if (!quill)
                return;

            const form = new FormData();
            form.append("title", data.title);
            form.append("content", quill.root.innerHTML);
            form.append("image", data.image);
            form.append("category", data.category);
            form.append("tags", data.tags);

            await API.post("/blogs", form);

            toast.success("Blog created!");
            navigate("/"); //redirect.
        } catch (err) {
            toast.error(err.response?.data?.msg || "Error creating blog");
        }
    };

    return (
        <div className="flex justify-center mt-10">
            <div className="glass w-[700px] p-6 flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-center">Create Blog</h2>

                <input
                    className="input"
                    placeholder="Title"
                    onChange={(e) =>
                        setData({ ...data, title: e.target.value })
                    }
                />

                {/*Rich Editor*/}
                <div
                    ref={quillRef}
                    className="bg-white dark:bg-gray-900 rounded-xl"
                />

                <input
                    className="input"
                    placeholder="Category(e.g., Tech, Travel)"
                    onChange={(e) =>
                        setData({ ...data, category: e.target.value })
                    }
                />

                <input
                    className="input"
                    placeholder="Tags(comma separated)"
                    onChange={(e) =>
                        setData({ ...data, tags: e.target.value })
                    }
                />

                <input
                    type="file"
                    className="input"
                    onChange={(e) =>
                        setData({ ...data, image: e.target.files[0] })
                    }
                />

                <button className="btn" onClick={submit}>
                    Publish
                </button>
            </div>
        </div>
    );
}