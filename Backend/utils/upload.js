const cloudinary = require("../config/cloudinary");

exports.uploadImage = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "blog-platform",
    });

    return result.secure_url;
  } catch (err) {
    throw new Error("Image upload failed");
  }
};