const router = require("express").Router();
const auth = require("../middleware/auth");

const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  likeBlog,
  commentBlog,
} = require("../controllers/blogController");

router.get("/", getBlogs);
router.post("/", auth, createBlog);
router.get("/:id", getBlogById);
router.put("/:id", auth, updateBlog);
router.delete("/:id", auth, deleteBlog);
router.put("/like/:id", auth, likeBlog);
router.post("/comment/:id", auth, commentBlog);

module.exports = router;