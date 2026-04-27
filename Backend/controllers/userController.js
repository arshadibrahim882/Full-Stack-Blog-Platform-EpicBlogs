const User = require("../models/User");
const { uploadImage } = require("../utils/upload");

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user).select("-password");
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user);

    if (!user) 
      return res.status(404).json({ msg: "User not found" });

    //TEXT DATA.
    user.name = req.body.name || user.name;
    user.bio = req.body.bio || user.bio;

    //IMAGE UPLOAD.
    if (req.files && req.files.avatar) {
      const avatarUrl = await uploadImage(req.files.avatar);
      user.avatar = avatarUrl;
    }

    await user.save();

    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  res.json(user);
};