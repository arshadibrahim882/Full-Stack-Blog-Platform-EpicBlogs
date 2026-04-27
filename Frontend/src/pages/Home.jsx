import { useEffect, useState } from "react";
import API from "../api/api";
import BlogCard from "../components/BlogCard";
import contentImg from "../assets/content-5.png";
import SearchBar from "../components/SearchBar";

export default function Home() {
    const [blogs, setBlogs] = useState([]);
    const [query, setQuery] = useState("");

    const filteredBlogs = blogs.filter((b) =>
        b.title.toLowerCase().includes(query.toLowerCase()) ||
        b.category?.toLowerCase().includes(query.toLowerCase()) ||
        b.tags?.join(" ").toLowerCase().includes(query.toLowerCase())
    );

    const fetchBlogs = async () => {
        try {
            const res = await API.get("/blogs");
            setBlogs(res.data);
        } catch {
            setBlogs([]);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="p-6">

            {/*INTRO*/}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">Welcome to EpicBlogs✨</h1>
                <img
                    src={contentImg}
                    alt="Content"
                    className="mx-auto w-[400px] mt-4 rounded-xl hover:scale-105 transition"
                />
                <p className="opacity-70 mt-2">
                    Share ideas. Explore stories. Build your voice.
                </p>
            </div>

            <div className="flex justify-center mb-6">
                <SearchBar setQuery={setQuery} />
            </div>

            {/*BLOG LIST*/}
            <div className="grid gap-6 md:grid-cols-2">
                <h2 className="text-4xl font-bold">Blogs List</h2>
                <br /><br />
                {filteredBlogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} refresh={fetchBlogs} />
                ))}
                {filteredBlogs.length === 0 && (
                    <p className="text-center opacity-60 mt-10">
                        No blogs found 😢
                    </p>
                )}
            </div>
        </div>
    );
}