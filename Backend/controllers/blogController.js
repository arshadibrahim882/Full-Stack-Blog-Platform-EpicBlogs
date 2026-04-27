const Blog = require("../models/Blog");
const { uploadImage } = require("../utils/upload");

exports.createBlog = async (req, res) => {
  try {
    let imageUrl = "";

    if (req.files && req.files.image) {
      imageUrl = await uploadImage(req.files.image);
    }

    const blog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      image: imageUrl,
      user: req.user,
      tags: req.body.tags ? req.body.tags.split(",") : [],
      category: req.body.category || "General",
    });

    res.json(blog);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find()
    .populate("user", "email avatar")
    .sort({ createdAt: -1 });

  res.json(blogs);
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    res.json(blog);
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog.user.toString() !== req.user)
    return res.status(403).json({ msg: "You can only edit your own blog ❌" });

  Object.assign(blog, req.body);
  await blog.save();

  res.json(blog);
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    //Check ownership.
    if (blog.user.toString() !== req.user) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await blog.deleteOne();

    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.likeBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog.likes.includes(req.user)) {
    blog.likes.pull(req.user);
  } else {
    blog.likes.push(req.user);
  }

  await blog.save();
  res.json(blog);
};

exports.commentBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  blog.comments.push({
    text: req.body.text,
    user: req.user,
  });

  await blog.save();
  res.json(blog);
};